function addRow(feature, basic, pro) {
    const table = document.getElementById("comparisonTable");
    const ROW = document.createElement("tr");
    if (table.rows.length % 2 === 1) {
        ROW.style.backgroundColor = '#f1f6b5'; 
    }else {
        ROW.style.backgroundColor = 'white'; 
    }
    ROW.innerHTML = `\n<td>${feature}</td>\n<td><i class="fa ${basic}"></i></td>\n<td><i class="fa ${pro}"></i></td>`;
    table.appendChild(ROW);
}


function addAllRows(){
    for (let i = 0; i < NRROWS; i++){
        addRow(FEATURES[i], BASIC[i], PRO[i]);
    }
}