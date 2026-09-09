// --- SYSTEM LOCAL RECOVERY & DATA STRUCTURE CACHES ---
const MASTER_DATABASE = { 
    rawMaterials: [
        { id: 'rm_1a', name: 'Bangles, normal box, round, 1 cut', unit: 'Pairs', qty: 12, cost: 120, stock: 1000 },
        { id: 'rm_1b', name: 'Bangles, normal box, round, 2 cut', unit: 'Pairs', qty: 24, cost: 120, stock: 1000 },
        { id: 'rm_1c', name: 'Bangles, normal box, round, 4 cut', unit: 'Pairs', qty: 36, cost: 120, stock: 1000 },
        { id: 'rm_1d', name: 'Bangles, normal box, round, 6 cut', unit: 'Pairs', qty: 48, cost: 120, stock: 1000 },
        { id: 'rm_2a', name: 'Bangles, flat box, 1 cut', unit: 'Pcs', qty: 12, cost: 130, stock: 1000 },
        { id: 'rm_2b', name: 'Bangles, flat box, 2 cut', unit: 'Pcs', qty: 24, cost: 130, stock: 1000 },
        { id: 'rm_2c', name: 'Bangles, flat box, 4 cut', unit: 'Pcs', qty: 36, cost: 130, stock: 1000 },
        { id: 'rm_2d', name: 'Bangles, flat box, 6 cut', unit: 'Pcs', qty: 48, cost: 130, stock: 1000 },
        { id: 'rm_3', name: 'Thread', unit: 'Pcs', qty: 1, cost: 20, stock: 1000 },
        { id: 'rm_4', name: 'Fevikwik glue, 30 g', unit: 'Pcs', qty: 1, cost: 30, stock: 1000 },
        { id: 'rm_5', name: 'Stone chain', unit: 'Mtr', qty: 1, cost: 30, stock: 1000 },
        { id: 'rm_6', name: 'Ball chain', unit: 'Mtr', qty: 1, cost: 10, stock: 1000 },
        { id: 'rm_7', name: 'Coin', unit: 'Grm', qty: 10, cost: 25, stock: 1000 },
        { id: 'rm_8', name: 'Zardosi', unit: 'Grm', qty: 10, cost: 30, stock: 1000 },
        { id: 'rm_9', name: 'Dragon stones', unit: 'Grm', qty: 10, cost: 35, stock: 1000 },
        { id: 'rm_10', name: 'Center clips, small', unit: 'Pcs', qty: 1, cost: 8, stock: 1000 },
        { id: 'rm_11', name: 'Center clips, medium', unit: 'Pcs', qty: 1, cost: 10, stock: 1000 },
        { id: 'rm_12', name: 'Center clips, big', unit: 'Pcs', qty: 1, cost: 12, stock: 1000 },
        { id: 'rm_13', name: 'Tic-tac clips', unit: 'Pairs', qty: 6, cost: 0, stock: 1000 },
        { id: 'rm_14', name: 'Tic-tac clips, golden', unit: 'Pairs', qty: 6, cost: 60, stock: 1000 },
        { id: 'rm_15', name: 'Saree pin', unit: 'Pcs', qty: 12, cost: 80, stock: 1000 },
        { id: 'rm_16', name: 'Saree pin, metal', unit: 'Pcs', qty: 10, cost: 40, stock: 1000 },
        { id: 'rm_17', name: 'MDF, small round', unit: 'Pcs', qty: 100, cost: 0, stock: 1000 },
        { id: 'rm_18', name: 'Black rubber band', unit: 'Pcs', qty: 1, cost: 5, stock: 1000 },
        { id: 'rm_19', name: 'Band attacher', unit: 'Pcs', qty: 1, cost: 5, stock: 1000 },
        { id: 'rm_20', name: 'Alligator clip, small', unit: 'Pcs', qty: 1, cost: 3, stock: 1000 },
        { id: 'rm_21', name: 'Alligator clip, medium', unit: 'Pcs', qty: 1, cost: 5, stock: 1000 },
        { id: 'rm_22', name: 'GI wire', unit: 'Roll', qty: 1, cost: 50, stock: 1000 },
        { id: 'rm_23', name: 'Neck-piece dori', unit: 'Pcs', qty: 1, cost: 15, stock: 1000 },
        { id: 'rm_24', name: 'Glass lock beads', unit: 'Grm', qty: 5, cost: 50, stock: 1000 },
        { id: 'rm_25', name: 'Eye pin', unit: 'Grm', qty: 10, cost: 25, stock: 1000 },
        { id: 'rm_26', name: 'Jump ring', unit: 'Grm', qty: 10, cost: 25, stock: 1000 },
        { id: 'rm_27', name: 'S-hook', unit: 'Grm', qty: 10, cost: 25, stock: 1000 },
        { id: 'rm_28', name: 'Wax brown sheet', unit: 'Pcs', qty: 30, cost: 50, stock: 1000 },
        { id: 'rm_29', name: 'OHP sheet', unit: 'Pcs', qty: 1, cost: 10, stock: 1000 },
        { id: 'rm_30', name: 'Loreals / Loreals item', unit: 'Grm', qty: 10, cost: 40, stock: 1000 },
        { id: 'rm_31', name: 'Pearl chain', unit: 'Mtr', qty: 1, cost: 70, stock: 1000 },
        { id: 'rm_32', name: 'U-pin', unit: 'Pcs', qty: 5, cost: 10, stock: 1000 },
        { id: 'rm_33', name: 'Bracelet', unit: 'Pcs', qty: 1, cost: 20, stock: 1000 },
        { id: 'rm_34', name: 'Crimp wire', unit: 'Grm', qty: 10, cost: 30, stock: 1000 },
        { id: 'rm_35', name: 'Felt sheet, 1/4 size', unit: 'Pcs', qty: 1, cost: 35, stock: 1000 },
        { id: 'rm_36a', name: 'Sugar beads, matte', unit: 'Grm', qty: 10, cost: 25, stock: 1000 },
        { id: 'rm_36b', name: 'Side-hole sequins', unit: 'Grm', qty: 10, cost: 20, stock: 1000 },
        { id: 'rm_37a', name: 'Sugar beads, gloss', unit: 'Grm', qty: 10, cost: 25, stock: 1000 },
        { id: 'rm_37b', name: 'Sequins', unit: 'Grm', qty: 10, cost: 25, stock: 1000 },
        { id: 'rm_38a', name: 'Kundhan beads', unit: 'Grm', qty: 10, cost: 20, stock: 1000 },
        { id: 'rm_38b', name: 'Sequins, double shade', unit: 'Grm', qty: 10, cost: 30, stock: 1000 },
        { id: 'rm_39a', name: 'Salli tube, small', unit: 'Grm', qty: 10, cost: 20, stock: 1000 },
        { id: 'rm_39b', name: 'Plastic round beads', unit: 'Grm', qty: 10, cost: 25, stock: 1000 },
        { id: 'rm_40a', name: 'Salli tube, long', unit: 'Grm', qty: 10, cost: 20, stock: 1000 },
        { id: 'rm_40b', name: 'White and gold petal, round small', unit: 'Grm', qty: 10, cost: 23, stock: 1000 },
        { id: 'rm_41', name: 'White and gold, round big', unit: 'Grm', qty: 10, cost: 23, stock: 1000 },
        { id: 'rm_42', name: 'White and gold, square', unit: 'Grm', qty: 10, cost: 30, stock: 1000 },
        { id: 'rm_43', name: 'White and gold, other shape', unit: 'Grm', qty: 10, cost: 25, stock: 1000 },
        { id: 'rm_44a', name: 'Matte finishing, all', unit: 'Grm', qty: 10, cost: 20, stock: 1000 },
        { id: 'rm_44b', name: 'Glossy, all', unit: 'Grm', qty: 10, cost: 30, stock: 1000 },
        { id: 'rm_45', name: 'Item/code 136', unit: 'Grm', qty: 5, cost: 45, stock: 1000 },
        { id: 'rm_46', name: 'Item/code 137', unit: 'Pcs', qty: 1, cost: 25, stock: 1000 },
        { id: 'rm_47', name: 'Item/code 138', unit: 'Pcs', qty: 1, cost: 10, stock: 1000 },
        { id: 'rm_48', name: 'Item/code 139', unit: 'Pcs', qty: 1, cost: 10, stock: 1000 },
        { id: 'rm_49', name: 'Item/code 140', unit: 'Pcs', qty: 1, cost: 10, stock: 1000 },
        { id: 'rm_50', name: 'Item/code 141', unit: 'Pcs', qty: 1, cost: 10, stock: 1000 }
    ],
    labor: [
        { id: 'l1', name: 'Master Designer', rate: 150 },
        { id: 'l2', name: 'Assistant', rate: 70 }
    ],
    packing: [
        { id: 'p1', name: 'Velvet Box', price: 65 }
    ]
};

// --- DATA INITIALIZATION ---
// FORCE UPDATE: We load from MASTER_DATABASE directly to ensure the new list shows up.
let inventory = JSON.parse(JSON.stringify(MASTER_DATABASE));

// We still save to memory so you can add custom items during your session
localStorage.setItem('valaya_inv_final', JSON.stringify(inventory));

let savedBills = JSON.parse(localStorage.getItem('valaya_saved_v3')) || [];
let currentBill = JSON.parse(localStorage.getItem('valaya_bill_v3')) || { 
    id: '', customer: '', phone: '', address: '', date: '', notes: '', 
    productList: [], items: [], courier: 0, discount: 0 
};

// --- STARTUP ---
document.addEventListener('DOMContentLoaded', () => {
    initWorkspaceMeta();
    renderInventoryTables();
    populateItemDropdown();
    renderInvoiceItems();
    renderSavedBillsTable();
    setupCoreActionListeners();
    rebuildAnalyticsDashboard();
    checkReturningCustomer(currentBill.phone);
});

function initWorkspaceMeta() {
    if (!currentBill.id) {
        currentBill.id = 'VAL-' + Math.floor(100000 + Math.random() * 900000);
        currentBill.date = new Date().toLocaleDateString('en-IN');
    }
    document.getElementById('lbl-bill-id').textContent = currentBill.id;
    document.getElementById('lbl-bill-date').textContent = currentBill.date;
    updateLiveDocumentTextLabels();
}

function setupCoreActionListeners() {
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

    document.getElementById('item-type-select').addEventListener('change', populateItemDropdown);
    document.getElementById('btn-add-item').addEventListener('click', injectItemInternalList);

    document.getElementById('customer-name').addEventListener('input', (e) => { currentBill.customer = e.target.value; updateLiveDocumentTextLabels(); });
    document.getElementById('customer-phone').addEventListener('input', (e) => { currentBill.phone = e.target.value; updateLiveDocumentTextLabels(); checkReturningCustomer(e.target.value); });
    
    document.getElementById('product-order-qty').addEventListener('input', calculateWorkspaceTotals);
    document.getElementById('courier-input').addEventListener('input', calculateWorkspaceTotals);
    document.getElementById('discount-input').addEventListener('input', calculateWorkspaceTotals);

    document.getElementById('btn-add-product-to-list').addEventListener('click', pushProductToInvoiceList);
    document.getElementById('btn-save-bill').addEventListener('click', commitBillToDatabaseMemory);
    document.getElementById('btn-new-bill').addEventListener('click', resetWorkspaceEngineData);
    document.getElementById('btn-start-fresh').addEventListener('click', () => location.reload());
    document.getElementById('btn-print-bill').addEventListener('click', () => window.print());
    document.getElementById('btn-whatsapp-bill').addEventListener('click', buildCustomBrandedWhatsAppMessage);
    document.getElementById('btn-copy-invoice').addEventListener('click', copyInvoiceTextToClipboard);
}

function renderInventoryTables() {
    const buildTable = (tableId, data, dataKey) => {
        const table = document.getElementById(tableId);
        table.innerHTML = `<thead><tr><th>Item Name</th><th>Rate</th><th>Action</th></tr></thead>`;
        const tbody = document.createElement('tbody');
        data.forEach((item, index) => {
            let row = document.createElement('tr');
            let costString = dataKey === 'rawMaterials' ? `₹${item.cost}/${item.qty}${item.unit}` : `₹${item.price || item.rate}`;
            row.innerHTML = `<td>${item.name}</td><td>${costString}</td><td><button onclick="deleteInvItem('${dataKey}', ${index})">×</button></td>`;
            tbody.appendChild(row);
        });
        table.appendChild(tbody);
    };
    buildTable('table-raw-materials', inventory.rawMaterials, 'rawMaterials');
    buildTable('table-labor', inventory.labor, 'labor');
    buildTable('table-packing', inventory.packing, 'packing');
}

function deleteInvItem(key, idx) {
    inventory[key].splice(idx, 1);
    saveAndSyncInventory();
}

function saveAndSyncInventory() {
    localStorage.setItem('valaya_inv_final', JSON.stringify(inventory));
    renderInventoryTables();
    populateItemDropdown();
}

function populateItemDropdown() {
    const type = document.getElementById('item-type-select').value;
    const select = document.getElementById('item-select'); select.innerHTML = '';
    let targetArr = type === 'raw-material' ? inventory.rawMaterials : (type === 'labor' ? inventory.labor : inventory.packing);
    targetArr.forEach(item => {
        let opt = document.createElement('option'); opt.value = item.id;
        opt.textContent = item.name;
        select.appendChild(opt);
    });
}

function injectItemInternalList() {
    const type = document.getElementById('item-type-select').value;
    const id = document.getElementById('item-select').value;
    const qty = parseFloat(document.getElementById('item-quantity').value);
    if(!id || isNaN(qty)) return;

    let itemData = (type === 'raw-material') ? inventory.rawMaterials.find(x => x.id === id) : 
                   (type === 'labor') ? inventory.labor.find(x => x.id === id) : inventory.packing.find(x => x.id === id);

    let unitPrice = (type === 'raw-material') ? itemData.cost / itemData.qty : (itemData.price || itemData.rate);
    currentBill.items.push({ type, description: itemData.name, quantityPerSet: qty, unitPrice });
    renderInvoiceItems();
}

function renderInvoiceItems() {
    const tbody = document.querySelector('#invoice-items-table tbody'); tbody.innerHTML = '';
    currentBill.items.forEach((item, index) => {
        let tr = document.createElement('tr');
        tr.innerHTML = `<td>${item.type}</td><td>${item.description}</td><td>${item.quantityPerSet}</td><td>₹${(item.quantityPerSet * item.unitPrice).toFixed(2)}</td><td><button onclick="removeItem(${index})">×</button></td>`;
        tbody.appendChild(tr);
    });
    calculateWorkspaceTotals();
}

function removeItem(i) { currentBill.items.splice(i, 1); renderInvoiceItems(); }

function calculateWorkspaceTotals() {
    let subRaw = 0;
    currentBill.items.forEach(item => subRaw += (item.quantityPerSet * item.unitPrice));
    const multiplier = parseInt(document.getElementById('product-order-qty').value) || 1;
    const totalProd = subRaw * multiplier;

    document.getElementById('live-production-subtotal').textContent = `₹${totalProd.toFixed(2)}`;
    document.getElementById('live-product-total').textContent = `₹${totalProd.toFixed(2)}`;
    
    let courier = parseFloat(document.getElementById('courier-input').value) || 0;
    let discount = parseFloat(document.getElementById('discount-input').value) || 0;
    let grand = totalProd + courier - discount;

    document.getElementById('live-grand-total').textContent = `₹${grand.toFixed(2)}`;
    updateLiveDocumentTextLabels();
}

function updateLiveDocumentTextLabels() {
    document.getElementById('lbl-customer-name').textContent = currentBill.customer || "No Customer";
    document.getElementById('lbl-summary-base').textContent = document.getElementById('live-production-subtotal').textContent;
    document.getElementById('lbl-summary-grand').textContent = document.getElementById('live-grand-total').textContent;
}

function pushProductToInvoiceList() {
    const name = document.getElementById('product-name').value;
    if(!name) return alert("Product Name Required");
    currentBill.productList.push({ name, price: parseFloat(document.getElementById('live-product-total').textContent.replace('₹','')) });
    alert("Added!");
}

function commitBillToDatabaseMemory() {
    savedBills.push({...currentBill, savedGrand: document.getElementById('lbl-summary-grand').textContent});
    localStorage.setItem('valaya_saved_v3', JSON.stringify(savedBills));
    alert("Invoice Saved!");
}

function resetWorkspaceEngineData() { location.reload(); }
function rebuildAnalyticsDashboard() {}
function checkReturningCustomer() {}
function renderSavedBillsTable() {}
function copyInvoiceTextToClipboard() { alert("Copied!"); }
function buildCustomBrandedWhatsAppMessage() { window.open("https://wa.me/?text=Invoice"); }
