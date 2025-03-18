function addRow(feature, basic, pro){
    // a variable with a template row
    let ROW = '<tr><td>New Feature</td><td><i class="fa CHECKCROSSBASIC"></i></td><td><i class="fa CHECKCROSSPRO"></i></td></tr>';
    // replace with actual css class names
    let newRow = ROW.replace("New Feature", feature).replace("CHECKCROSSBASIC", basic).replace("CHECKCROSSPRO", pro);
    // append the new row to the table
    document.getElementById("comparisonTable").innerHTML += newRow;
}

function addAllRows(){
    for (let i = 0; i < NRROWS; i++){
        addRow(FEATURES[i], BASIC[i], PRO[i]);
    }
}