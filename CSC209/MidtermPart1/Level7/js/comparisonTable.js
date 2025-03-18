function addRow (){
    // a variable with a template row
    for (let i = 0; i < NRROWS; i++){
        let ROW = '<tr><td>New Feature</td><td><i class="fa CHECKCROSSBASIC"></i></td><td><i class="fa CHECKCROSSPRO"></i></td></tr>';
        // replace with actual css class names
        let newRow = ROW.replace("New Feature", FEATURES[i]).replace("CHECKCROSSBASIC", BASIC[i]).replace("CHECKCROSSPRO", PRO[i]);
        // append the new row to the table
        document.getElementById("comparisonTable").innerHTML += newRow;
    }
}
