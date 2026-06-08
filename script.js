// --- SYSTEM LOCAL RECOVERY & DATA STRUCTURE CACHES ---
let inventory = JSON.parse(localStorage.getItem('valaya_inv_v3')) || { rawMaterials: [], labor: [], packing: [] };
let savedBills = JSON.parse(localStorage.getItem('valaya_saved_v3')) || [];
let currentBill = JSON.parse(localStorage.getItem('valaya_bill_v3')) || {
    id: '', customer: '', phone: '', product: '', orderQty: 1, address: '', date: '', notes: '', items: [], courier: 0, discount: 0
};

document.addEventListener('DOMContentLoaded', () => {
    initWorkspaceMeta();
    renderInventoryTables();
    populateItemDropdown();
    renderInvoiceItems();
    renderSavedBillsTable();
    setupCoreActionListeners();
    rebuildAnalyticsDashboard();
});

function initWorkspaceMeta() {
    if (!currentBill.id) {
        currentBill.id = 'VAL-' + Math.floor(100000 + Math.random() * 900000);
        currentBill.date = new Date().toLocaleDateString('en-IN');
    }
    document.getElementById('customer-name').value = currentBill.customer || '';
    document.getElementById('customer-phone').value = currentBill.phone || '';
    document.getElementById('product-name').value = currentBill.product || '';
    document.getElementById('product-order-qty').value = currentBill.orderQty || 1;
    document.getElementById('customer-address').value = currentBill.address || '';
    document.getElementById('order-notes').value = currentBill.notes || '';
    document.getElementById('courier-input').value = currentBill.courier || '';
    document.getElementById('discount-input').value = currentBill.discount || '';

    document.getElementById('lbl-bill-id').textContent = currentBill.id;
    document.getElementById('lbl-bill-date').textContent = currentBill.date;
    
    updateLiveDocumentTextLabels();
}

function setupCoreActionListeners() {
    // Inventory Injections
    document.getElementById('form-raw-material').addEventListener('submit', (e) => {
        e.preventDefault();
        inventory.rawMaterials.push({
            id: 'rm_' + Date.now(),
            name: document.getElementById('rm-name').value,
            unit: document.getElementById('rm-unit-select').value,
            qty: parseFloat(document.getElementById('rm-pack-qty').value),
            cost: parseFloat(document.getElementById('rm-pack-cost').value),
            stock: parseFloat(document.getElementById('rm-stock').value)
        });
        saveAndSyncInventory(); e.target.reset();
    });

    document.getElementById('form-labor').addEventListener('submit', (e) => {
        e.preventDefault();
        inventory.labor.push({
            id: 'lb_' + Date.now(),
            name: document.getElementById('labor-name').value,
            rate: parseFloat(document.getElementById('labor-rate').value)
        });
        saveAndSyncInventory(); e.target.reset();
    });

    document.getElementById('form-packing').addEventListener('submit', (e) => {
        e.preventDefault();
        inventory.packing.push({
            id: 'pk_' + Date.now(),
            name: document.getElementById('packing-name').value,
            unit: document.getElementById('packing-unit').value,
            price: parseFloat(document.getElementById('packing-price').value)
        });
        saveAndSyncInventory(); e.target.reset();
    });

    document.getElementById('item-type-select').addEventListener('change', populateItemDropdown);
    document.getElementById('btn-add-item').addEventListener('click', injectItemInternalList);

    // DYNAMIC INTERACTIVE AUTOMATED CALCULATIONS ENGINE HOOKS
    document.getElementById('customer-name').addEventListener('input', (e) => { currentBill.customer = e.target.value; updateLiveDocumentTextLabels(); });
    document.getElementById('customer-phone').addEventListener('input', (e) => { currentBill.phone = e.target.value; updateLiveDocumentTextLabels(); });
    document.getElementById('product-name').addEventListener('input', (e) => { currentBill.product = e.target.value; updateLiveDocumentTextLabels(); });
    
    // Multi-Set Scaling Trigger
    document.getElementById('product-order-qty').addEventListener('input', (e) => { 
        currentBill.orderQty = parseInt(e.target.value) || 1; 
        calculateWorkspaceTotals(); 
    });
    
    document.getElementById('customer-address').addEventListener('input', (e) => { currentBill.address = e.target.value; updateLiveDocumentTextLabels(); });
    document.getElementById('order-notes').addEventListener('input', (e) => { currentBill.notes = e.target.value; updateLiveDocumentTextLabels(); });

    document.getElementById('courier-input').addEventListener('input', calculateWorkspaceTotals);
    document.getElementById('discount-input').addEventListener('input', calculateWorkspaceTotals);

    setupLiveToggleLogic('expense-percentage-select', 'custom-expense-input');
    setupLiveToggleLogic('profit-percentage-select', 'custom-profit-input');

    // Structural Actions
    document.getElementById('btn-save-bill').addEventListener('click', commitBillToDatabaseMemory);
    document.getElementById('btn-new-bill').addEventListener('click', resetWorkspaceEngineData);
    document.getElementById('btn-print-bill').addEventListener('click', () => window.print());
    document.getElementById('btn-whatsapp-bill').addEventListener('click', buildCustomBrandedWhatsAppMessage);
    document.getElementById('search-saved-bills').addEventListener('input', renderSavedBillsTable);

    // BACKUP IMPORT & EXPORT LOGICAL TRIGGERS
    document.getElementById('btn-export-json').addEventListener('click', executeSystemJSONBackupExport);
    document.getElementById('btn-import-json').addEventListener('change', executeSystemJSONBackupImport);
    document.getElementById('btn-export-csv').addEventListener('click', exportLedgerToCSVFile);

    // Testing suite
    document.getElementById('btn-auto-test').addEventListener('click', runFastAutomatedMockSuite);
}

function setupLiveToggleLogic(sId, iId) {
    const sel = document.getElementById(sId); const inp = document.getElementById(iId);
    sel.addEventListener('change', () => { 
        inp.style.display = sel.value === 'custom' ? 'block' : 'none'; 
        if(sel.value !== 'custom') inp.value = ''; 
        calculateWorkspaceTotals(); 
    });
    inp.addEventListener('input', calculateWorkspaceTotals);
}

function updateLiveDocumentTextLabels() {
    localStorage.setItem('valaya_bill_v3', JSON.stringify(currentBill));
    const nameNode = document.getElementById('lbl-customer-name');
    if(currentBill.customer) {
        nameNode.textContent = currentBill.customer; nameNode.classList.remove('empty-placeholder');
    } else {
        nameNode.textContent = "No Customer Selected"; nameNode.classList.add('empty-placeholder');
    }
    document.getElementById('lbl-customer-phone').textContent = currentBill.phone ? `Phone: ${currentBill.phone}` : '';
    document.getElementById('lbl-customer-address').textContent = currentBill.address ? `Shipping Destination: ${currentBill.address}` : '';
    document.getElementById('lbl-product-title').textContent = currentBill.product ? `${currentBill.product} (x${currentBill.orderQty || 1} Sets)` : "No Product Configured";
    document.getElementById('lbl-product-notes').textContent = currentBill.notes ? `Customization Note: ${currentBill.notes}` : '';
}

function populateItemDropdown() {
    const type = document.getElementById('item-type-select').value;
    const select = document.getElementById('item-select'); select.innerHTML = '';
    let targetArr = type === 'raw-material' ? inventory.rawMaterials : (type === 'labor' ? inventory.labor : inventory.packing);
    
    if(targetArr.length === 0) {
        select.innerHTML = '<option disabled selected>No data entries added yet</option>'; return;
    }
    targetArr.forEach(item => {
        let opt = document.createElement('option'); opt.value = item.id;
        opt.textContent = type === 'raw-material' ? `${item.name} (Available Stock: ${item.stock} ${item.unit})` :
                          (type === 'labor' ? `${item.name} (₹${item.rate}/Hr)` : `${item.name} (₹${item.price})`);
        select.appendChild(opt);
    });
}

function injectItemInternalList() {
    const type = document.getElementById('item-type-select').value;
    const id = document.getElementById('item-select').value;
    const qty = parseFloat(document.getElementById('item-quantity').value);

    if(!id || isNaN(qty) || qty <= 0) { alert('Assign valid item entries and quantity metrics.'); return; }

    let itemData, desc, unitPrice, itemId;
    if (type === 'raw-material') {
        itemData = inventory.rawMaterials.find(x => x.id === id); 
        desc = itemData.name; unitPrice = itemData.cost / itemData.qty; itemId = itemData.id;
    } else if (type === 'labor') {
        itemData = inventory.labor.find(x => x.id === id); 
        desc = `Labor: ${itemData.name}`; unitPrice = itemData.rate; itemId = itemData.id;
    } else {
        itemData = inventory.packing.find(x => x.id === id); 
        desc = `Packing: ${itemData.name}`; unitPrice = itemData.price; itemId = itemData.id;
    }

    currentBill.items.push({ 
        id: 'item_' + Date.now(), itemId, type, description: desc, quantityPerSet: qty, unitPrice 
    });
    document.getElementById('item-quantity').value = '';
    renderInvoiceItems();
}

function renderInvoiceItems() {
    const tbody = document.querySelector('#invoice-items-table tbody'); tbody.innerHTML = '';
    const multiplier = currentBill.orderQty || 1;

    currentBill.items.forEach((item, index) => {
        let tr = document.createElement('tr');
        const scaledTotalQty = item.quantityPerSet * multiplier;
        const totalCost = scaledTotalQty * item.unitPrice;
        
        // Stock Shortage Verification Engine Logic
        let alertPill = '';
        if(item.type === 'raw-material') {
            const originalInvItem = inventory.rawMaterials.find(x => x.id === item.itemId);
            if(originalInvItem && originalInvItem.stock < scaledTotalQty) {
                alertPill = `<br><span class="stock-warning-pill">⚠️ Stock Deficit! Missing ${(scaledTotalQty - originalInvItem.stock).toFixed(1)} ${originalInvItem.unit}</span>`;
            }
        }

        tr.innerHTML = `<td><strong>${item.type[0].toUpperCase()}</strong></td>
        <td>${item.description}${alertPill}</td>
        <td>${item.quantityPerSet} <span style="color:#6B7280; font-size:0.75rem;">(Total Run: ${scaledTotalQty.toFixed(1)})</span></td>
        <td>₹${totalCost.toFixed(2)}</td>
        <td><button class="delete-btn" onclick="removeItemFromInvoice(${index})">&times;</button></td>`;
        tbody.appendChild(tr);
    });
    calculateWorkspaceTotals();
}

function removeItemFromInvoice(i) { currentBill.items.splice(i, 1); renderInvoiceItems(); }

// --- AUTOMATED PRODUCTION MATH LOGICS ENGINE WITH DETAILED SUB-TOTALS ---
function calculateWorkspaceTotals() {
    currentBill.courier = parseFloat(document.getElementById('courier-input').value) || 0;
    currentBill.discount = parseFloat(document.getElementById('discount-input').value) || 0;
    const multiplier = currentBill.orderQty || 1;

    let subRaw = 0, subLabor = 0, subPacking = 0;

    currentBill.items.forEach(item => {
        const scaledCost = (item.quantityPerSet * multiplier) * item.unitPrice;
        if (item.type === 'raw-material') subRaw += scaledCost;
        else if (item.type === 'labor') subLabor += scaledCost;
        else subPacking += scaledCost;
    });

    // Output detailed subsection totals back to user configuration dashboard interface panel
    document.getElementById('live-sub-raw').textContent = `₹${subRaw.toFixed(2)}`;
    document.getElementById('live-sub-labor').textContent = `₹${subLabor.toFixed(2)}`;
    document.getElementById('live-sub-packing').textContent = `₹${subPacking.toFixed(2)}`;

    const operationalCombinedSubtotal = subRaw + subLabor + subPacking;
    
    const expSelect = document.getElementById('expense-percentage-select');
    let expPct = expSelect.value === 'custom' ? (parseFloat(document.getElementById('custom-expense-input').value)||0)/100 : parseFloat(expSelect.value);
    const calculatedExpenseAmount = subRaw * expPct; // Expense logic linked as % of Raw Materials
    
    const absoluteMakingCost = operationalCombinedSubtotal + calculatedExpenseAmount;
    
    const profSelect = document.getElementById('profit-percentage-select');
    let profPct = profSelect.value === 'custom' ? (parseFloat(document.getElementById('custom-profit-input').value)||0)/100 : parseFloat(profSelect.value);
    const calculatedProfitAmount = absoluteMakingCost * profPct;

    const netRetailBasePrice = absoluteMakingCost + calculatedProfitAmount;
    const absoluteGrandTotalDue = Math.max(0, (netRetailBasePrice + currentBill.courier) - currentBill.discount);

    // Save internal profit calculations for analytics indexing later
    currentBill.calculatedNetProfit = calculatedProfitAmount;

    // Render configuration metrics
    document.getElementById('live-expense-val').textContent = `₹${calculatedExpenseAmount.toFixed(2)}`;
    document.getElementById('live-profit-val').textContent = `₹${calculatedProfitAmount.toFixed(2)}`;
    document.getElementById('live-grand-total').textContent = `₹${absoluteGrandTotalDue.toFixed(2)}`;

    // Render customer preview metrics
    document.getElementById('lbl-product-base-price').textContent = `₹${netRetailBasePrice.toFixed(2)}`;
    document.getElementById('lbl-summary-base').textContent = `₹${netRetailBasePrice.toFixed(2)}`;
    document.getElementById('lbl-summary-courier').textContent = `₹${currentBill.courier.toFixed(2)}`;
    document.getElementById('lbl-summary-discount').textContent = `-₹${currentBill.discount.toFixed(2)}`;
    document.getElementById('lbl-summary-grand').textContent = `₹${absoluteGrandTotalDue.toFixed(2)}`;

    document.getElementById('row-lbl-courier').style.display = currentBill.courier > 0 ? 'flex' : 'none';
    document.getElementById('row-lbl-discount').style.display = currentBill.discount > 0 ? 'flex' : 'none';

    updateLiveDocumentTextLabels();
}

// --- CORE DISASTER RECOVERY & CONFIG FILE IMPORTS/EXPORTS ---
function executeSystemJSONBackupExport() {
    const packageData = {
        version: '3.0.0',
        timestamp: Date.now(),
        inventory: inventory,
        savedBills: savedBills
    };
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(packageData));
    const dlAnchor = document.createElement('a');
    dlAnchor.setAttribute("href", dataStr);
    dlAnchor.setAttribute("download", `VALAYA_STORES_BACKUP_${new Date().toISOString().split('T')[0]}.json`);
    document.body.appendChild(dlAnchor);
    dlAnchor.click();
    dlAnchor.remove();
}

function executeSystemJSONBackupImport(e) {
    const fileReader = new FileReader();
    if(!e.target.files[0]) return;
    
    fileReader.onload = function(event) {
        try {
            const parsed = JSON.parse(event.target.result);
            if(parsed.inventory && parsed.savedBills) {
                inventory = parsed.inventory;
                savedBills = parsed.savedBills;
                localStorage.setItem('valaya_inv_v3', JSON.stringify(inventory));
                localStorage.setItem('valaya_saved_v3', JSON.stringify(savedBills));
                
                renderInventoryTables();
                populateItemDropdown();
                renderSavedBillsTable();
                rebuildAnalyticsDashboard();
                calculateWorkspaceTotals();
                alert('Database Restored Successfully! All materials and historical invoices are recovered.');
            } else {
                alert('Invalid file format. Ensure you upload a valid Valaya Stores Backup JSON file.');
            }
        } catch (err) {
            alert('Error parsing backup file data structure template.');
        }
    };
    fileReader.readAsText(e.target.files[0]);
}

function exportLedgerToCSVFile() {
    if(savedBills.length === 0) return alert('No historical database records available to convert.');
    let csvContent = "data:text/csv;charset=utf-8,Invoice ID,Date,Customer Name,Phone Number,Product Model,Quantity,Grand Total Paid,Net Profit Earned\n";
    
    savedBills.forEach(b => {
        let row = `"${b.id}","${b.date}","${b.customer}","${b.phone}","${b.product}","${b.orderQty}","${b.savedGrand || 0}","₹${(b.calculatedNetProfit || 0).toFixed(2)}"\n`;
        csvContent += row;
    });
    
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `VALAYA_STORES_LEDGER_${new Date().getFullYear()}.csv`);
    document.body.appendChild(link);
    link.click();
    link.remove();
}

// --- ANALYTICS PROCESSING SYSTEM ---
function rebuildAnalyticsDashboard() {
    let globalRevenue = 0; let globalProfit = 0; let catalogFrequency = {};
    
    savedBills.forEach(b => {
        let numTotal = parseFloat(String(b.savedGrand).replace(/[^0-9.]/g, '')) || 0;
        globalRevenue += numTotal;
        globalProfit += b.calculatedNetProfit || 0;
        
        if(b.product) {
            catalogFrequency[b.product] = (catalogFrequency[b.product] || 0) + parseInt(b.orderQty || 1);
        }
    });

    document.getElementById('stat-revenue').textContent = `₹${globalRevenue.toFixed(2)}`;
    document.getElementById('stat-profit').textContent = `₹${globalProfit.toFixed(2)}`;
    
    let topDesign = "None Tracked"; let maxCount = 0;
    for(let design in catalogFrequency) {
        if(catalogFrequency[design] > maxCount) { maxCount = catalogFrequency[design]; topDesign = `${design} (${maxCount} sets)`; }
    }
    document.getElementById('stat-popular').textContent = topDesign;
}

// --- CUSTOM STORE WHATSAPP MESSAGE ROUTINES ---
function buildCustomBrandedWhatsAppMessage() {
    if(!currentBill.customer.trim() || !currentBill.product.trim()) {
        alert('Configure customer profiles and order variables before launching WhatsApp integrations.'); return;
    }
    const grandTotalStr = document.getElementById('lbl-summary-grand').textContent;

    let txt = `✨ *VALAYA STORE — ORDER INVOICE* ✨\n`;
    txt += `Invoice Reference ID: ${currentBill.id}\n`;
    txt += `Date of Dispatch: ${currentBill.date}\n`;
    txt += `Billed To: *${currentBill.customer}*\n\n`;
    
    txt += `🛍️ *Order Blueprint Selection:*\n`;
    txt += `• Design Line: *${currentBill.product}*\n`;
    txt += `• Complete Quantity: ${currentBill.orderQty} Finished Bangle Set(s)\n`;
    txt += `-------------------------------------------\n`;
    txt += `💰 *TOTAL PAYABLE DUE: ${grandTotalStr}*\n`;
    txt += `-------------------------------------------\n\n`;
    
    if(currentBill.address) txt += `📍 *Delivery Address:* ${currentBill.address}\n\n`;
    if(currentBill.notes) txt += `📝 *Customization Details:* ${currentBill.notes}\n\n`;
    
    txt += `Thank you so much for choosing Valaya Store to craft your personalized luxury bangles! We appreciate your support for handcrafted design. 🥰💖\n\n`;
    txt += `📸 *Follow us on Instagram for lookbooks & updates:* \n`;
    txt += `https://www.instagram.com/valaya_store`;

    const encoded = encodeURIComponent(txt);
    const cleanPhone = currentBill.phone.replace(/[^0-9]/g, '');
    const finalUrl = cleanPhone ? `https://api.whatsapp.com/send?phone=${cleanPhone}&text=${encoded}` : `https://api.whatsapp.com/send?text=${encoded}`;
    window.open(finalUrl, '_blank');
}

// --- INVENTORY LOGISTICS DATABASES SYNC ENGINE ---
function renderInventoryTables() {
    const buildTable = (id, data, key) => {
        const tbl = document.getElementById(id);
        tbl.innerHTML = '<thead><tr><th>Asset Name</th><th>Base Cost Rate</th><th></th></tr></thead>';
        const tbody = document.createElement('tbody');
        data.forEach((item, idx) => {
            let tr = document.createElement('tr');
            let costDisplay = key === 'rawMaterials' ? `₹${item.cost} / ${item.qty}${item.unit} <br><small style="color:#2563EB;">Stock: ${item.stock} ${item.unit}</small>` : 
                             (key === 'labor' ? `₹${item.rate}/Hr` : `₹${item.price}/Unit`);
            tr.innerHTML = `<td>${item.name}</td><td>${costDisplay}</td><td><button class="delete-btn" onclick="deleteInvItem('${key}', ${idx})">&times;</button></td>`;
            tbody.appendChild(tr);
        });
        tbl.appendChild(tbody);
    };
    buildTable('table-raw-materials', inventory.rawMaterials, 'rawMaterials');
    buildTable('table-labor', inventory.labor, 'labor');
    buildTable('table-packing', inventory.packing, 'packing');
}

function deleteInvItem(key, idx) { inventory[key].splice(idx, 1); saveAndSyncInventory(); }
function saveAndSyncInventory() { 
    localStorage.setItem('valaya_inv_v3', JSON.stringify(inventory)); 
    renderInventoryTables(); populateItemDropdown(); renderInvoiceItems(); 
}

function renderSavedBillsTable() {
    const filter = document.getElementById('search-saved-bills').value.toLowerCase();
    const tbody = document.querySelector('#table-saved-bills tbody'); tbody.innerHTML = '';
    savedBills.forEach(b => {
        if(b.id.toLowerCase().includes(filter) || b.customer.toLowerCase().includes(filter)) {
            let tr = document.createElement('tr');
            tr.innerHTML = `<td>${b.id}</td><td>${b.customer}</td><td>${b.savedGrand || '₹0.00'}</td>
            <td><button class="view-btn" onclick="loadSavedBillArchive('${b.id}')">View</button></td>`;
            tbody.appendChild(tr);
        }
    });
}

function commitBillToDatabaseMemory() {
    if(!currentBill.customer.trim()) return alert('Assign valid customer profiles before caching states.');
    
    // Deduct stock levels permanently when saving invoice to records ledger
    const multiplier = currentBill.orderQty || 1;
    currentBill.items.forEach(item => {
        if(item.type === 'raw-material') {
            const rawInv = inventory.rawMaterials.find(x => x.id === item.itemId);
            if(rawInv) rawInv.stock = Math.max(0, rawInv.stock - (item.quantityPerSet * multiplier));
        }
    });
    saveAndSyncInventory();

    currentBill.savedGrand = document.getElementById('lbl-summary-grand').textContent;
    let idx = savedBills.findIndex(x => x.id === currentBill.id);
    if(idx > -1) savedBills[idx] = { ...currentBill }; else savedBills.push({ ...currentBill });
    
    localStorage.setItem('valaya_saved_v3', JSON.stringify(savedBills));
    renderSavedBillsTable(); rebuildAnalyticsDashboard();
    alert('Invoice saved to business tracking ledger. Material warehouse stock updated!');
}

function loadSavedBillArchive(id) {
    let target = savedBills.find(x => x.id === id);
    if(target) { currentBill = JSON.parse(JSON.stringify(target)); initWorkspaceMeta(); renderInvoiceItems(); }
}

function resetWorkspaceEngineData() {
    currentBill = { id: '', customer: '', phone: '', product: '', orderQty: 1, address: '', date: '', notes: '', items: [], courier: 0, discount: 0 };
    localStorage.removeItem('valaya_bill_v3'); initWorkspaceMeta(); renderInvoiceItems();
}

// --- HIGH STRESS TESTING SUITE ACCELERATOR ---
function runFastAutomatedMockSuite() {
    inventory.rawMaterials = [
        { id: 'm1', name: 'Zari Designer Silk Thread', unit: 'Reel', qty: 10, cost: 500, stock: 45 }, 
        { id: 'm2', name: 'Golden Metal Base Kadas', unit: 'Pcs', qty: 12, cost: 240, stock: 10 }, 
        { id: 'm3', name: 'Kundan Cut Glass Stones', unit: 'Grm', qty: 50, cost: 350, stock: 500 }
    ];
    inventory.labor = [
        { id: 'l1', name: 'Tanuja (Master Designer)', rate: 150 },
        { id: 'l2', name: 'Ananya (Assistant)', rate: 70 }
    ];
    inventory.packing = [
        { id: 'p1', name: 'Velvet Premium Box', unit: 'Box', price: 65 },
        { id: 'p2', name: 'Bubble Protectors', unit: 'Pcs', price: 10 }
    ];
    saveAndSyncInventory();

    // Mock ledger data for dashboard analytics compilation preview
    savedBills = [
        { id: 'VAL-10928', customer: 'Deepika Padukone', phone: '9188822211', product: 'Royal Kundan Chura Set', orderQty: 2, savedGrand: '₹4,500.00', calculatedNetProfit: 950.00, items: [], date: '10/5/2026' },
        { id: 'VAL-10929', customer: 'Priyanka Chopra', phone: '9177755533', product: 'Bridal Silk Kada Set', orderQty: 5, savedGrand: '₹12,400.00', calculatedNetProfit: 2600.00, items: [], date: '15/5/2026' },
        { id: 'VAL-10930', customer: 'Isha Ambani', phone: '9199999999', product: 'Bridal Silk Kada Set', orderQty: 12, savedGrand: '₹34,000.00', calculatedNetProfit: 7100.00, items: [], date: '19/5/2026' }
    ];
    localStorage.setItem('valaya_saved_v3', JSON.stringify(savedBills));
    renderSavedBillsTable();
    rebuildAnalyticsDashboard();

    // Populate active creative workspace with an order requesting 3 sets to trigger shortage limits
    currentBill = {
        id: 'VAL-STRESS99',
        customer: 'Kiran Kumar',
        phone: '919876543210',
        product: 'Bridal Silk Kada Set',
        orderQty: 3, 
        address: '123 Main Street, Ballari, Karnataka',
        date: new Date().toLocaleDateString('en-IN'),
        notes: 'Urgent design request for upcoming wedding catalog shoot.',
        courier: 120,
        discount: 75,
        items: [
            { itemId: 'm1', type: 'raw-material', description: 'Zari Designer Silk Thread', quantityPerSet: 2, unitPrice: 50 },
            { itemId: 'm2', type: 'raw-material', description: 'Golden Metal Base Kadas', quantityPerSet: 4, unitPrice: 20 }, 
            { itemId: 'l1', type: 'labor', description: 'Labor: Tanuja (Master Designer)', quantityPerSet: 3, unitPrice: 150 },
            { itemId: 'p1', type: 'packing', description: 'Packing: Velvet Premium Box', quantityPerSet: 1, unitPrice: 65 }
        ]
    };
    
    initWorkspaceMeta();
    renderInvoiceItems();
    alert('Valaya Stores High-Stress Simulator Activated!\n\n• Detailed Material/Labor subtotal pills are active.\n• Stock Deficit warning triggers on Golden Kadas (Needs 12, Stock has 10).\n• Dashboard Analytics populated with business trends.');
}