// --- SYSTEM LOCAL RECOVERY & DATA STRUCTURE CACHES ---
const MASTER_DATABASE = { 
    rawMaterials: [
        { id: 'rm_1A', name: 'Bangles, normal box, round, 1 cut', unit: 'Pcs', qty: 12, cost: 120, stock: 0 },
        { id: 'rm_1B', name: 'Bangles, normal box, round, 2 cut', unit: 'Pcs', qty: 24, cost: 120, stock: 0 },
        { id: 'rm_1C', name: 'Bangles, normal box, round, 4 cut', unit: 'Pcs', qty: 36, cost: 120, stock: 0 },
        { id: 'rm_1D', name: 'Bangles, normal box, round, 6 cut', unit: 'Pcs', qty: 48, cost: 120, stock: 0 },
        { id: 'rm_2A', name: 'Bangles, flat box, 1 cut', unit: 'Pcs', qty: 12, cost: 130, stock: 0 },
        { id: 'rm_2B', name: 'Bangles, flat box, 2 cut', unit: 'Pcs', qty: 24, cost: 130, stock: 0 },
        { id: 'rm_2C', name: 'Bangles, flat box, 4 cut', unit: 'Pcs', qty: 36, cost: 130, stock: 0 },
        { id: 'rm_2D', name: 'Bangles, flat box, 6 cut', unit: 'Pcs', qty: 48, cost: 130, stock: 0 },
        { id: 'rm_3', name: 'Thread', unit: 'Pcs', qty: 1, cost: 20, stock: 0 },
        { id: 'rm_4', name: 'Fevikwik glue, 30 g', unit: 'Pcs', qty: 1, cost: 30, stock: 0 },
        { id: 'rm_5', name: 'Stone chain', unit: 'Mtr', qty: 1, cost: 30, stock: 0 },
        { id: 'rm_6', name: 'Ball chain', unit: 'Mtr', qty: 1, cost: 10, stock: 0 },
        { id: 'rm_7', name: 'Coin', unit: 'Grm', qty: 10, cost: 25, stock: 0 },
        { id: 'rm_8', name: 'Zardosi', unit: 'Grm', qty: 10, cost: 30, stock: 0 },
        { id: 'rm_9', name: 'Dragon stones', unit: 'Grm', qty: 10, cost: 35, stock: 0 },
        { id: 'rm_10', name: 'Center clips, small', unit: 'Pcs', qty: 1, cost: 0, stock: 0 },
        { id: 'rm_11', name: 'Center clips, medium', unit: 'Pcs', qty: 1, cost: 10, stock: 0 },
        { id: 'rm_12', name: 'Center clips, big', unit: 'Pcs', qty: 1, cost: 12, stock: 0 },
        { id: 'rm_13', name: 'Tic-tac clips', unit: 'Pcs', qty: 6, cost: 0, stock: 0 },
        { id: 'rm_14', name: 'Tic-tac clips, golden', unit: 'Pcs', qty: 6, cost: 60, stock: 0 },
        { id: 'rm_15', name: 'Saree pin', unit: 'Pcs', qty: 12, cost: 80, stock: 0 },
        { id: 'rm_16', name: 'Saree pin, metal', unit: 'Pcs', qty: 10, cost: 40, stock: 0 },
        { id: 'rm_17', name: 'MDF, small round', unit: 'Pcs', qty: 100, cost: 0, stock: 0 },
        { id: 'rm_18', name: 'Black rubber band', unit: 'Pcs', qty: 1, cost: 5, stock: 0 },
        { id: 'rm_19', name: 'Band attacher', unit: 'Pcs', qty: 1, cost: 5, stock: 0 },
        { id: 'rm_20', name: 'Alligator clip, small', unit: 'Pcs', qty: 1, cost: 3, stock: 0 },
        { id: 'rm_21', name: 'Alligator clip, medium', unit: 'Pcs', qty: 1, cost: 5, stock: 0 },
        { id: 'rm_22', name: 'GI wire', unit: 'Reel', qty: 1, cost: 50, stock: 0 },
        { id: 'rm_23', name: 'Neck-piece dori', unit: 'Pcs', qty: 1, cost: 15, stock: 0 },
        { id: 'rm_24', name: 'Glass lock beads', unit: 'Grm', qty: 5, cost: 50, stock: 0 },
        { id: 'rm_25', name: 'Eye pin', unit: 'Grm', qty: 10, cost: 25, stock: 0 },
        { id: 'rm_26', name: 'Jump ring', unit: 'Grm', qty: 10, cost: 25, stock: 0 },
        { id: 'rm_27', name: 'S-hook', unit: 'Grm', qty: 10, cost: 25, stock: 0 },
        { id: 'rm_28', name: 'Wax brown sheet', unit: 'Pcs', qty: 30, cost: 50, stock: 0 },
        { id: 'rm_29', name: 'OHP sheet', unit: 'Pcs', qty: 1, cost: 10, stock: 0 },
        { id: 'rm_30', name: 'Loreals / Loreals item, unclear', unit: 'Grm', qty: 10, cost: 40, stock: 0 },
        { id: 'rm_31', name: 'Pearl chain', unit: 'Mtr', qty: 1, cost: 70, stock: 0 },
        { id: 'rm_32', name: 'U-pin', unit: 'Pcs', qty: 5, cost: 10, stock: 0 },
        { id: 'rm_33', name: 'Bracelet', unit: 'Pcs', qty: 1, cost: 20, stock: 0 },
        { id: 'rm_34', name: 'Crimp wire', unit: 'Grm', qty: 10, cost: 30, stock: 0 },
        { id: 'rm_35', name: 'Felt sheet, 1/4 size', unit: 'Pcs', qty: 1, cost: 35, stock: 0 },
        { id: 'rm_36A', name: 'Sugar beads, matte', unit: 'Grm', qty: 10, cost: 25, stock: 0 },
        { id: 'rm_36B', name: 'Side-hole sequins', unit: 'Grm', qty: 10, cost: 20, stock: 0 },
        { id: 'rm_37A', name: 'Sugar beads, gloss', unit: 'Grm', qty: 10, cost: 25, stock: 0 },
        { id: 'rm_37B', name: 'Sequins', unit: 'Grm', qty: 10, cost: 25, stock: 0 },
        { id: 'rm_38A', name: 'Kundhan beads', unit: 'Grm', qty: 10, cost: 20, stock: 0 },
        { id: 'rm_38B', name: 'Sequins, double shade', unit: 'Grm', qty: 10, cost: 30, stock: 0 },
        { id: 'rm_39A', name: 'Salhi/Salli tube, small, unclear', unit: 'Grm', qty: 10, cost: 20, stock: 0 },
        { id: 'rm_39B', name: 'Plastic round beads', unit: 'Grm', qty: 10, cost: 25, stock: 0 },
        { id: 'rm_40A', name: 'Salhi/Salli tube, long, unclear', unit: 'Grm', qty: 10, cost: 20, stock: 0 },
        { id: 'rm_40B', name: 'White and gold petal, round small', unit: 'Grm', qty: 10, cost: 23, stock: 0 },
        { id: 'rm_41', name: 'White and gold, round big', unit: 'Grm', qty: 10, cost: 23, stock: 0 },
        { id: 'rm_42', name: 'White and gold, square', unit: 'Grm', qty: 10, cost: 30, stock: 0 },
        { id: 'rm_43', name: 'White and gold, other shape', unit: 'Grm', qty: 10, cost: 25, stock: 0 },
        { id: 'rm_44A', name: 'Matte finishing, all', unit: 'Grm', qty: 10, cost: 20, stock: 0 },
        { id: 'rm_44B', name: 'Glossy, all', unit: 'Grm', qty: 10, cost: 30, stock: 0 },
        { id: 'rm_45', name: 'Item/code 136', unit: 'Grm', qty: 5, cost: 45, stock: 0 },
        { id: 'rm_46', name: 'Item/code 137', unit: 'Pcs', qty: 1, cost: 25, stock: 0 },
        { id: 'rm_47', name: 'Item/code 138', unit: 'Pcs', qty: 1, cost: 10, stock: 0 },
        { id: 'rm_48', name: 'Item/code 139', unit: 'Pcs', qty: 1, cost: 10, stock: 0 },
        { id: 'rm_49', name: 'Item/code 140', unit: 'Pcs', qty: 1, cost: 10, stock: 0 },
        { id: 'rm_50', name: 'Item/code 141', unit: 'Pcs', qty: 1, cost: 10, stock: 0 }
    ],
    labor: [],
    packing: []
};

// --- DATA INITIALIZATION ---
// Inventory is kept in memory only. Reloading the page resets it to this spreadsheet list.
// You can still add, edit, and delete materials manually while the app is open.
let inventory = JSON.parse(JSON.stringify(MASTER_DATABASE));
inventory.labor = [
    { id: 'l1', name: 'Master Designer', rate: 150 },
    { id: 'l2', name: 'Assistant', rate: 70 }
];
inventory.packing = [{ id: 'p1', name: 'Velvet Box', price: 65 }];

let savedBills = JSON.parse(localStorage.getItem('valaya_saved_v3')) || [];
let currentBill = JSON.parse(localStorage.getItem('valaya_bill_v3')) || { 
    id: '', customer: '', phone: '', address: '', date: '', notes: '', 
    productList: [], items: [], courier: 0, discount: 0 
};

// --- STARTUP ---
document.addEventListener('DOMContentLoaded', () => {
    restoreDraftFieldsIntoUI();
    initWorkspaceMeta();
    renderInventoryTables();
    populateItemDropdown();
    renderInvoiceItems();
    renderSavedBillsTable();
    setupCoreActionListeners();
    rebuildAnalyticsDashboard();
    checkReturningCustomer(currentBill.phone);
});

function restoreDraftFieldsIntoUI() {
    const hasDraft = currentBill.customer || currentBill.phone || currentBill.address ||
        currentBill.notes || (currentBill.items && currentBill.items.length > 0) ||
        (currentBill.productList && currentBill.productList.length > 0);

    document.getElementById('customer-name').value = currentBill.customer || '';
    document.getElementById('customer-phone').value = currentBill.phone || '';
    document.getElementById('customer-address').value = currentBill.address || '';
    document.getElementById('order-notes').value = currentBill.notes || '';
    document.getElementById('courier-input').value = currentBill.courier || '';
    document.getElementById('discount-input').value = currentBill.discount || '';

    if (hasDraft) {
        alert('Your previous unsaved invoice draft has been restored.');
    }
}

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
    // Inventory Management
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

    // Bill Inputs
    document.getElementById('customer-name').addEventListener('input', (e) => { currentBill.customer = e.target.value; updateLiveDocumentTextLabels(); });
    document.getElementById('customer-phone').addEventListener('input', (e) => { currentBill.phone = e.target.value; updateLiveDocumentTextLabels(); checkReturningCustomer(e.target.value); });
    document.getElementById('customer-address').addEventListener('input', (e) => { currentBill.address = e.target.value; updateLiveDocumentTextLabels(); });
    document.getElementById('order-notes').addEventListener('input', (e) => { currentBill.notes = e.target.value; updateLiveDocumentTextLabels(); });
    
    document.getElementById('product-order-qty').addEventListener('input', calculateWorkspaceTotals);
    document.getElementById('courier-input').addEventListener('input', calculateWorkspaceTotals);
    document.getElementById('discount-input').addEventListener('input', calculateWorkspaceTotals);

    setupLiveToggleLogic('expense-percentage-select', 'custom-expense-input');
    setupLiveToggleLogic('profit-percentage-select', 'custom-profit-input');

    // Action Buttons
    document.getElementById('btn-add-product-to-list').addEventListener('click', pushProductToInvoiceList);
    document.getElementById('btn-reset-current-product').addEventListener('click', resetCurrentProductBuilder);
    document.getElementById('btn-save-bill').addEventListener('click', commitBillToDatabaseMemory);
    document.getElementById('btn-new-bill').addEventListener('click', resetWorkspaceEngineData);
    document.getElementById('btn-start-fresh').addEventListener('click', executeStartFreshAction);
    document.getElementById('btn-print-bill').addEventListener('click', () => window.print());
    document.getElementById('btn-whatsapp-bill').addEventListener('click', buildCustomBrandedWhatsAppMessage);
    document.getElementById('btn-copy-invoice').addEventListener('click', copyInvoiceTextToClipboard);
    document.getElementById('btn-open-whatsapp').addEventListener('click', openWhatsAppCustomerChat);
    document.getElementById('search-saved-bills').addEventListener('input', renderSavedBillsTable);
    document.getElementById('btn-export-json').addEventListener('click', executeSystemJSONBackupExport);
    document.getElementById('btn-import-json').addEventListener('change', executeSystemJSONBackupImport);
    document.getElementById('btn-export-csv').addEventListener('click', exportLedgerToCSVFile);
}

// --- RENDERING TABLES (FORCED REFRESH FOR TABLETS) ---
function renderInventoryTables() {
    const buildTable = (tableId, data, dataKey) => {
        const table = document.getElementById(tableId);
        // Force Header Refresh
        table.innerHTML = `
            <thead>
                <tr>
                    <th style="width:50%">Item Name</th>
                    <th style="width:30%">Rate/Stock</th>
                    <th style="width:20%">Actions</th>
                </tr>
            </thead>`;
            
        const tbody = document.createElement('tbody');
        data.forEach((item, index) => {
            let row = document.createElement('tr');
            let costString = dataKey === 'rawMaterials' ? 
                `₹${item.cost}/${item.qty}${item.unit} (${item.stock})` : 
                (dataKey === 'labor' ? `₹${item.rate}/Hr` : `₹${item.price}`);
            
            row.innerHTML = `
                <td>${item.name}</td>
                <td>${costString}</td>
                <td>
                    <div style="display:flex; gap:8px;">
                        <button onclick="editInvItem('${dataKey}', ${index})" style="background:#f59e0b; color:white; border:none; padding:4px 8px; border-radius:4px; cursor:pointer;">📝</button>
                        <button onclick="deleteInvItem('${dataKey}', ${index})" style="background:#ef4444; color:white; border:none; padding:4px 8px; border-radius:4px; cursor:pointer;">&times;</button>
                    </div>
                </td>`;
            tbody.appendChild(row);
        });
        table.appendChild(tbody);
    };

    buildTable('table-raw-materials', inventory.rawMaterials, 'rawMaterials');
    buildTable('table-labor', inventory.labor, 'labor');
    buildTable('table-packing', inventory.packing, 'packing');
}

function editInvItem(key, idx) {
    let item = inventory[key][idx];
    let newName = prompt("Update Item Name:", item.name);
    if (newName === null) return;
    item.name = newName;

    if (key === 'rawMaterials') {
        item.cost = parseFloat(prompt("Update Total Price (₹):", item.cost)) || item.cost;
        item.stock = parseFloat(prompt("Update Current Stock Count:", item.stock)) || item.stock;
    } else if (key === 'labor') {
        item.rate = parseFloat(prompt("Update Hourly Rate (₹):", item.rate)) || item.rate;
    } else {
        item.price = parseFloat(prompt("Update Price (₹):", item.price)) || item.price;
    }
    saveAndSyncInventory();
}

function deleteInvItem(key, idx) { 
    if(confirm("Delete this item?")) {
        inventory[key].splice(idx, 1); 
        saveAndSyncInventory(); 
    }
}

function saveAndSyncInventory() { 
    // Inventory stays in memory only; no localStorage is used.
    renderInventoryTables(); 
    populateItemDropdown();
}

// --- BILLING LOGIC ---

function setupLiveToggleLogic(sId, iId) {
    const sel = document.getElementById(sId); const inp = document.getElementById(iId);
    sel.addEventListener('change', () => { 
        inp.style.display = sel.value === 'custom' ? 'block' : 'none'; 
        calculateWorkspaceTotals(); 
    });
    inp.addEventListener('input', calculateWorkspaceTotals);
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

    if(!id || isNaN(qty) || qty <= 0) { alert('Enter valid quantity.'); return; }

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

    currentBill.items.push({ id: 'item_' + Date.now(), itemId, type, description: desc, quantityPerSet: qty, unitPrice });
    document.getElementById('item-quantity').value = '';
    renderInvoiceItems();
}

function renderInvoiceItems() {
    const tbody = document.querySelector('#invoice-items-table tbody'); tbody.innerHTML = '';
    const multiplier = parseInt(document.getElementById('product-order-qty').value) || 1;

    currentBill.items.forEach((item, index) => {
        let tr = document.createElement('tr');
        const scaledQty = item.quantityPerSet * multiplier;
        const totalCost = scaledQty * item.unitPrice;
        tr.innerHTML = `<td><strong>${item.type[0].toUpperCase()}</strong></td>
        <td>${item.description}</td>
        <td>${item.quantityPerSet} sets (Tot: ${scaledQty.toFixed(1)})</td>
        <td>₹${totalCost.toFixed(2)}</td>
        <td><button onclick="removeItemFromInvoice(${index})" style="background:none; border:none; color:red; cursor:pointer;">&times;</button></td>`;
        tbody.appendChild(tr);
    });
    calculateWorkspaceTotals();
}

function removeItemFromInvoice(i) { currentBill.items.splice(i, 1); renderInvoiceItems(); }

function calculateWorkspaceTotals() {
    const multiplier = parseInt(document.getElementById('product-order-qty').value) || 1;
    let subRaw = 0, subLabor = 0, subPacking = 0;

    currentBill.items.forEach(item => {
        const scaledCost = (item.quantityPerSet * multiplier) * item.unitPrice;
        if (item.type === 'raw-material') subRaw += scaledCost;
        else if (item.type === 'labor') subLabor += scaledCost;
        else subPacking += scaledCost;
    });

    document.getElementById('live-sub-raw').textContent = `₹${subRaw.toFixed(2)}`;
    document.getElementById('live-sub-labor').textContent = `₹${subLabor.toFixed(2)}`;
    document.getElementById('live-sub-packing').textContent = `₹${subPacking.toFixed(2)}`;

    const prodTotal = subRaw + subLabor + subPacking;
    document.getElementById('live-production-subtotal').textContent = `₹${prodTotal.toFixed(2)}`;
    
    const expSelect = document.getElementById('expense-percentage-select');
    let expPct = expSelect.value === 'custom' ? (parseFloat(document.getElementById('custom-expense-input').value)||0)/100 : parseFloat(expSelect.value);
    const expVal = subRaw * expPct; 
    
    const profSelect = document.getElementById('profit-percentage-select');
    let profPct = profSelect.value === 'custom' ? (parseFloat(document.getElementById('custom-profit-input').value)||0)/100 : parseFloat(profSelect.value);
    const profVal = (prodTotal + expVal) * profPct;

const productValue = prodTotal + expVal + profVal;

const courier =
    parseFloat(
        document.getElementById('courier-input').value
    ) || 0;

const discount =
    parseFloat(
        document.getElementById('discount-input').value
    ) || 0;

    currentBill.calculatedNetProfit = profVal;

    document.getElementById('live-expense-val').textContent = `₹${expVal.toFixed(2)}`;
    document.getElementById('live-profit-val').textContent = `₹${profVal.toFixed(2)}`;
    document.getElementById(
    'live-product-total'
).textContent =
    `₹${productValue.toFixed(2)}`;

    // Courier and discount apply ONCE to the whole invoice, based on the
    // products already added to the bill list — not the single product
    // currently being built above (that's shown separately as "Item Total").
    let runningProductsTotal = 0;
    (currentBill.productList || []).forEach(p => runningProductsTotal += (p.price || 0));

    const runningGrand = runningProductsTotal + courier - discount;

document.getElementById(
    'live-courier-total'
).textContent =
    `₹${courier.toFixed(2)}`;

document.getElementById(
    'live-discount-total'
).textContent =
    `-₹${discount.toFixed(2)}`;

    document.getElementById('live-products-running-total').textContent = `₹${runningProductsTotal.toFixed(2)}`;
    document.getElementById('live-grand-total').textContent = `₹${runningGrand.toFixed(2)}`;

    updateLiveDocumentTextLabels();
}

function updateLiveDocumentTextLabels() {
    localStorage.setItem('valaya_bill_v3', JSON.stringify(currentBill));
    document.getElementById('lbl-customer-name').textContent = currentBill.customer || "No Customer Selected";
    document.getElementById('lbl-customer-phone').textContent = currentBill.phone ? `Phone: ${currentBill.phone}` : '';
    document.getElementById('lbl-customer-address').textContent = currentBill.address ? `Shipping: ${currentBill.address}` : '';

    const billBody = document.getElementById('bill-items-body');
    billBody.innerHTML = '';
    let totalBasePrice = 0;

   if (currentBill.productList &&
    currentBill.productList.length > 0) {

    currentBill.productList.forEach((prod,index)=>{
        totalBasePrice += prod.price;

        billBody.innerHTML += `
        <tr>
            <td>
                <b>${prod.name}</b> (x${prod.qty})
            </td>
            <td style="text-align:right">
                ₹${prod.price.toFixed(2)}
            </td>
        </tr>`;
    });

}
else if(currentBill.items.length > 0){

    const liveTotal =
    parseFloat(
        document.getElementById(
            'live-product-total'
        ).textContent.replace('₹','')
    ) || 0;

    const liveName =
        document.getElementById(
            'product-name'
        ).value || 'Current Workspace Product';

    totalBasePrice = liveTotal;

    billBody.innerHTML = `
        <tr>
            <td>
                <b>${liveName}</b>
                <br>
                <small>Draft Product Preview</small>
            </td>
            <td style="text-align:right">
                ₹${liveTotal.toFixed(2)}
            </td>
        </tr>`;
}

    document.getElementById('lbl-summary-base').textContent =`₹${totalBasePrice.toFixed(2)}`;    
    currentBill.courier = parseFloat(document.getElementById('courier-input').value) || 0;
    currentBill.discount = parseFloat(document.getElementById('discount-input').value) || 0;
    document.getElementById('lbl-summary-courier').textContent = `+ ₹${currentBill.courier.toFixed(2)}`;
    document.getElementById('lbl-summary-discount').textContent = `- ₹${currentBill.discount.toFixed(2)}`;

   const final = (totalBasePrice + currentBill.courier) - currentBill.discount;
    document.getElementById('lbl-summary-grand').textContent = `₹${Math.max(0, final).toFixed(2)}`;

    renderProductList();
}

function pushProductToInvoiceList() {
    const name = document.getElementById('product-name').value;
    const qty = parseInt(document.getElementById('product-order-qty').value) || 1;
     // Item price = production cost + expenses + profit ONLY.
    // Courier/discount are invoice-level and must never be baked into a
    // single product's price, or they'd get counted once per product.
    const priceText = document.getElementById('live-product-total').textContent; 
    const price = parseFloat(priceText.replace('₹', '')) || 0;

    if (!name) { alert("Please enter Product Name."); return; }
    if (!currentBill.productList) currentBill.productList = [];
    currentBill.productList.push({
        id: 'prod_' + Date.now(),
        name,
        qty,
        price,
        netProfit: currentBill.calculatedNetProfit || 0,
        recipeItems: JSON.parse(JSON.stringify(currentBill.items))
    });

    document.getElementById('product-name').value = '';
    document.getElementById('product-order-qty').value = '1';
    currentBill.items = []; 
    renderInvoiceItems(); 
    updateLiveDocumentTextLabels();
    alert("Product added to bill!");
}

function removeProductFromList(index) {
    const product = currentBill.productList[index];
    if (!product) return;
    if (!confirm(`Remove "${product.name}" from this invoice?`)) return;
    currentBill.productList.splice(index, 1);
    calculateWorkspaceTotals();
}

function duplicateProductInList(index) {
    const product = currentBill.productList[index];
    if (!product) return;
    const copy = JSON.parse(JSON.stringify(product));
    copy.id = 'prod_' + Date.now();
    currentBill.productList.splice(index + 1, 0, copy);
    calculateWorkspaceTotals();
}

function editProductInList(index) {
    const product = currentBill.productList[index];
    if (!product) return;
    if (!confirm(`Edit "${product.name}"? It will be removed from the invoice list and loaded back into the workspace above.`)) return;

    document.getElementById('product-name').value = product.name;
    document.getElementById('product-order-qty').value = product.qty;

    if (product.recipeItems) {
        currentBill.items = JSON.parse(JSON.stringify(product.recipeItems));
    } else {
        currentBill.items = [];
        alert('This product was saved before recipe tracking was added, so its ingredient breakdown could not be restored automatically. Please rebuild the recipe below, then re-add it.');
    }

    currentBill.productList.splice(index, 1);
    renderInvoiceItems();
    updateLiveDocumentTextLabels();
}

function renderProductList() {
    const block = document.getElementById('product-list-block');
    const tbody = document.querySelector('#table-product-list tbody');
    if (!block || !tbody) return;

    const list = currentBill.productList || [];
    block.style.display = list.length > 0 ? 'block' : 'none';
    tbody.innerHTML = '';

    list.forEach((p, index) => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${p.name}</td>
            <td>${p.qty}</td>
            <td>₹${p.price.toFixed(2)}</td>
            <td>
                <div style="display:flex; gap:6px;">
                    <button onclick="editProductInList(${index})" style="background:#f59e0b; color:white; border:none; padding:6px 8px; border-radius:4px; cursor:pointer;">📝</button>
                    <button onclick="duplicateProductInList(${index})" style="background:#6366f1; color:white; border:none; padding:6px 8px; border-radius:4px; cursor:pointer;">📄</button>
                    <button onclick="removeProductFromList(${index})" style="background:#ef4444; color:white; border:none; padding:6px 8px; border-radius:4px; cursor:pointer;">×</button>
                </div>
            </td>`;
        tbody.appendChild(tr);
    });
}

function commitBillToDatabaseMemory() {
    if(!currentBill.customer) return alert('Enter customer name.');
    if (
    currentBill.items.length > 0 &&
    document.getElementById('product-name').value &&
    currentBill.productList.length === 0
) {
    pushProductToInvoiceList();
}
    if(
    currentBill.items.length > 0 &&
    document.getElementById('product-name').value
){
    pushProductToInvoiceList();
}
    currentBill.savedGrand = document.getElementById('lbl-summary-grand').textContent;
    let totalP = 0;
    currentBill.productList.forEach(p => totalP += p.netProfit);
    currentBill.totalProfitEarned = totalP;

    const existingIndex =
    savedBills.findIndex(
        bill => bill.id === currentBill.id
    );

if(existingIndex !== -1){
    savedBills[existingIndex] = { ...currentBill };
}
else{
    savedBills.push({ ...currentBill });
}
    localStorage.setItem('valaya_saved_v3', JSON.stringify(savedBills));
    renderSavedBillsTable(); rebuildAnalyticsDashboard();
    const startNew = confirm('Invoice finalized successfully!\n\nStart a new customer now?');
    if (startNew) {
        resetWorkspaceEngineData();
    }
}

function checkReturningCustomer(phoneValue) {
    const badge = document.getElementById('returning-customer-info');
    const digits = (phoneValue || '').replace(/\D/g, '');
    if (!digits || digits.length < 6) { badge.style.display = 'none'; return; }

    const matches = savedBills.filter(b => (b.phone || '').replace(/\D/g, '') === digits);
    if (matches.length === 0) { badge.style.display = 'none'; return; }

    let lifetimeValue = 0;
    matches.forEach(b => {
        lifetimeValue += parseFloat(String(b.savedGrand || 0).replace('₹', '').replace(',', '')) || 0;
    });

    badge.style.display = 'block';
    badge.textContent = `⭐ Returning customer — ${matches.length} previous order(s), lifetime value ₹${lifetimeValue.toFixed(2)}`;
}

function renderSavedBillsTable() {
    const tbody = document.querySelector('#table-saved-bills tbody'); tbody.innerHTML = '';
    savedBills.forEach(b => {
        let tr = document.createElement('tr');
        tr.innerHTML = `<td>${b.id}</td><td>${b.customer}</td><td>${b.savedGrand}</td><td><button onclick="loadSavedBillArchive('${b.id}')" style="background:#06b6d4; color:white; border:none; padding:4px; border-radius:4px;">View</button></td>`;
        tbody.appendChild(tr);
    });
}

function loadSavedBillArchive(id) {

    let target = savedBills.find(x => x.id === id);

    if (!target) return;

    currentBill = JSON.parse(JSON.stringify(target));

    document.getElementById('customer-name').value = currentBill.customer || '';
    document.getElementById('customer-phone').value = currentBill.phone || '';
    document.getElementById('customer-address').value = currentBill.address || '';
    document.getElementById('order-notes').value = currentBill.notes || '';

    document.getElementById('courier-input').value = currentBill.courier || 0;
    document.getElementById('discount-input').value = currentBill.discount || 0;

initWorkspaceMeta();
    renderInvoiceItems();
}

function resetCurrentProductBuilder() {
    if (currentBill.items.length > 0) {
        if (!confirm("Clear the current product recipe and name?")) return;
    }
    currentBill.items = [];
    document.getElementById('product-name').value = '';
    document.getElementById('product-order-qty').value = '1';
    renderInvoiceItems();
    calculateWorkspaceTotals();
}

function resetWorkspaceEngineData() {
    // Clear everything
    currentBill = { id: '', customer: '', phone: '', address: '', date: '', notes: '', productList: [], items: [], courier: 0, discount: 0 };
    localStorage.removeItem('valaya_bill_v3');
    
    // UI Cleanup
    document.getElementById('customer-name').value = '';
    document.getElementById('customer-phone').value = '';
    document.getElementById('customer-address').value = '';
    document.getElementById('order-notes').value = '';
    document.getElementById('product-name').value = '';
    document.getElementById('product-order-qty').value = '1';
    document.getElementById('courier-input').value = '';
    document.getElementById('discount-input').value = '';
    document.getElementById('returning-customer-info').style.display = 'none';

    // Regenerate ID and reset workspace
    initWorkspaceMeta();
    renderInvoiceItems();
    calculateWorkspaceTotals();
}

function executeStartFreshAction() {
    if (!confirm("WARNING: This will delete the entire current draft and start a completely blank invoice. Continue?")) return;
    resetWorkspaceEngineData();
    alert("System reset. Ready for new invoice.");
}

// --- UTILS ---

// --- UTILS ---
function executeSystemJSONBackupExport() {
    const packageData = { inventory, savedBills };
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(packageData));
    const dlAnchor = document.createElement('a');
    dlAnchor.setAttribute("href", dataStr); dlAnchor.setAttribute("download", `BACKUP_${Date.now()}.json`); dlAnchor.click();
}

function executeSystemJSONBackupImport(e) {
    const fileReader = new FileReader();
    fileReader.onload = function(event) {
        const parsed = JSON.parse(event.target.result);
        inventory = parsed.inventory; savedBills = parsed.savedBills;
        localStorage.setItem('valaya_saved_v3', JSON.stringify(savedBills));
        location.reload();
    };
    fileReader.readAsText(e.target.files[0]);
}

function exportLedgerToCSVFile() {

    let csvRows = [];

    csvRows.push(
        "Bill ID,Date,Customer,Phone,Address,Product Name,Quantity,Invoice Total,Estimated Profit"
    );

    savedBills.forEach(bill => {

        if (bill.productList && bill.productList.length > 0) {

            bill.productList.forEach(product => {

                const row = [
                    bill.id,
                    bill.date,
                    `"${bill.customer || ''}"`,
                    `="'${bill.phone || ''}'"`,
                    `"${bill.address || ''}"`,
                    `"${product.name || ''}"`,
                    product.qty || 0,
parseFloat(
    String(bill.savedGrand)
        .replace("₹","")
        .replace(",","")
) || 0,
product.netProfit || 0
                ];

                csvRows.push(row.join(","));
            });
        }
    });

    const csvContent =
        "data:text/csv;charset=utf-8," +
        csvRows.join("\n");

    const encodedUri = encodeURI(csvContent);

    const link = document.createElement("a");

    link.setAttribute("href", encodedUri);

    link.setAttribute(
        "download",
        `Valaya_Sales_Ledger_${new Date().toISOString().split('T')[0]}.csv`
    );

    document.body.appendChild(link);

    link.click();

    document.body.removeChild(link);

    alert("Detailed sales ledger exported successfully.");
}

function rebuildAnalyticsDashboard() {

    let revenue = 0;
    let profit = 0;
    let orders = savedBills.length;
    let productsSold = 0;

    let productCounter = {};

    savedBills.forEach(bill => {

        revenue += parseFloat(
            String(bill.savedGrand || 0)
                .replace('₹','')
                .replace(',','')
        ) || 0;

        profit += bill.totalProfitEarned || 0;

        if(bill.productList){

            bill.productList.forEach(product => {

                productsSold += product.qty || 0;

                if(!productCounter[product.name]){
                    productCounter[product.name] = 0;
                }

                productCounter[product.name] += product.qty || 0;
            });
        }
    });

    let bestSeller = "None Tracked";
    let highestSales = 0;

    for(const product in productCounter){

        if(productCounter[product] > highestSales){

            highestSales = productCounter[product];
            bestSeller = product;
        }
    }

    document.getElementById('stat-revenue').textContent =
        `₹${revenue.toFixed(2)}`;

    document.getElementById('stat-profit').textContent =
        `₹${profit.toFixed(2)}`;

    document.getElementById('stat-orders').textContent =
        orders;

    document.getElementById('stat-products').textContent =
        productsSold;

    document.getElementById('stat-popular').textContent =
        bestSeller;
}

function buildFormattedInvoiceText() {
    const products = (currentBill.productList && currentBill.productList.length > 0)
        ? currentBill.productList
        : null;

    let lines = [];
    lines.push('🌸 VALAYA STORE 🌸');
    lines.push('');
    lines.push(`Invoice Number: ${currentBill.id}`);
    lines.push(`Date: ${currentBill.date}`);
    lines.push('');
    lines.push(`Customer: ${currentBill.customer || '-'}`);
    if (currentBill.phone) lines.push(`Phone: ${currentBill.phone}`);
    if (currentBill.address) lines.push(`Address: ${currentBill.address}`);
    lines.push('');
    lines.push('Products:');
    if (products) {
        products.forEach((p, i) => lines.push(`${i + 1}. ${p.name} (x${p.qty}) - ₹${p.price.toFixed(2)}`));
    } else {
        const liveName = document.getElementById('product-name').value || 'Product';
        const liveTotal = document.getElementById('live-product-total').textContent;
        lines.push(`1. ${liveName} - ${liveTotal}`);
    }
    lines.push('');
    lines.push(`Products Total: ${document.getElementById('lbl-summary-base').textContent}`);
    lines.push(`Courier: ${document.getElementById('lbl-summary-courier').textContent}`);
    lines.push(`Discount: ${document.getElementById('lbl-summary-discount').textContent}`);
    lines.push(`Grand Total: ${document.getElementById('lbl-summary-grand').textContent}`);
    lines.push('');
    lines.push('Thank you for supporting hand-crafted art! ✨');
    lines.push('Follow us on Instagram: @valaya_store');

    return lines.join('\n');
}

function getWhatsAppPhoneDigits() {
    return (currentBill.phone || '').replace(/\D/g, '');
}

function fallbackCopyText(text) {
    const ta = document.createElement('textarea');
    ta.value = text;
    ta.style.position = 'fixed';
    ta.style.opacity = '0';
    document.body.appendChild(ta);
    ta.focus();
    ta.select();
    try {
        document.execCommand('copy');
        alert('Invoice copied! You can paste it anywhere.');
    } catch (err) {
        alert('Could not copy automatically. Please select and copy the invoice text manually.');
    }
    document.body.removeChild(ta);
}

function copyInvoiceTextToClipboard() {
    const text = buildFormattedInvoiceText();
    if (navigator.clipboard && window.isSecureContext) {
        navigator.clipboard.writeText(text)
            .then(() => alert('Invoice copied! You can paste it anywhere.'))
            .catch(() => fallbackCopyText(text));
    } else {
        fallbackCopyText(text);
    }
}

function openWhatsAppCustomerChat() {
    const phone = getWhatsAppPhoneDigits();
    if (!phone) { alert('Enter a customer phone number first.'); return; }
    window.open(`https://api.whatsapp.com/send?phone=${phone}`, '_blank');
}

function buildCustomBrandedWhatsAppMessage() {
    const phone = getWhatsAppPhoneDigits();
    const text = buildFormattedInvoiceText();
    const url = phone
        ? `https://api.whatsapp.com/send?phone=${phone}&text=${encodeURIComponent(text)}`
        : `https://api.whatsapp.com/send?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
}

// THE "ORANGE BUTTON" - DEMO MODE
function runFastAutomatedMockSuite() {
    // Force Load Demo Inventory
    inventory = JSON.parse(JSON.stringify(MASTER_DATABASE));
    inventory.labor = [
        { id: 'l1', name: 'Tanuja (Sister)', rate: 150 },
        { id: 'l2', name: 'Helper', rate: 70 }
    ];
    inventory.packing = [{ id: 'p1', name: 'Premium Velvet Box', price: 65 }];
    saveAndSyncInventory();

    // Fill sample bill info
    currentBill.customer = "Priyanka Roy";
    currentBill.phone = "919988776655";
    currentBill.address = "Salt Lake, Kolkata";
    currentBill.notes = "Special Zari request with gold kundans";
    document.getElementById('customer-name').value = currentBill.customer;
    document.getElementById('customer-phone').value = currentBill.phone;
    document.getElementById('customer-address').value = currentBill.address;
    document.getElementById('order-notes').value = currentBill.notes;

    // Fill sample recipe
    currentBill.items = [
        { itemId: 'rm_1', type: 'raw-material', description: 'Bangles Normal base', quantityPerSet: 1, unitPrice: 120 },
        { itemId: 'rm_3', type: 'raw-material', description: 'Thread (Reel)', quantityPerSet: 2, unitPrice: 18 },
        { itemId: 'rm_12', type: 'raw-material', description: 'White and Gold kundans', quantityPerSet: 1, unitPrice: 1.5 },
        { itemId: 'l1', type: 'labor', description: 'Labor: Sister Designer', quantityPerSet: 1.5, unitPrice: 150 }
    ];

    document.getElementById('product-name').value = "Royal Bridal Kada Set";
    document.getElementById('product-order-qty').value = "2";
    document.getElementById('courier-input').value = "100";
    document.getElementById('discount-input').value = "50";

    initWorkspaceMeta();
    renderInvoiceItems();
    calculateWorkspaceTotals();
    
    alert('DEMO MODE ACTIVE!\n\nThe edit (📝) buttons are now visible on the left side.');
}
function loadSavedBillArchive(billId) {

    const selectedBill =
        savedBills.find(b => b.id === billId);

    if (!selectedBill) {
        alert("Bill not found.");
        return;
    }

    currentBill = JSON.parse(JSON.stringify(selectedBill));

    // Populate form fields
    document.getElementById('customer-name').value =
        currentBill.customer || '';

    document.getElementById('customer-phone').value =
        currentBill.phone || '';

    document.getElementById('customer-address').value =
        currentBill.address || '';

    document.getElementById('order-notes').value =
        currentBill.notes || '';

    document.getElementById('courier-input').value =
        currentBill.courier || 0;

    document.getElementById('discount-input').value =
        currentBill.discount || 0;

    // Refresh all UI
    renderInvoiceItems();
    calculateWorkspaceTotals();
    updateLiveDocumentTextLabels();

    alert("Invoice loaded successfully.");
}
