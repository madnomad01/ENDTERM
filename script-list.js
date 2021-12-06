var selectedRow = null
function onFormSubmit() {
        var formData = readFormData();
        if (selectedRow == null)
            insertNewRecord(formData);
        else
            updateRecord(formData);
        resetForm();
}

function readFormData() {
    var formData = {};
    formData["id"] = document.getElementById("id").value;
    formData["studentName"] = document.getElementById("student-name").value;
    formData["category"] = document.getElementById("category").value;
    formData["price"] = document.getElementById("price").value;
    return formData;
}

function insertNewRecord(data) {
    var table = document.getElementById("studentList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.id;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.studentName;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.category;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.price;
    cell4 = newRow.insertCell(4);
    cell4.innerHTML = `<a onClick="onEdit(this)"><button type="button" >Изменить</button></a>
                       <a onClick="onDelete(this)"><button type="button" >Удалить</button></a>`;
}

function resetForm() {
    document.getElementById("id").value = "";
    document.getElementById("studentName").value = "";
    document.getElementById("category").value = "";
    document.getElementById("price").value = "";
    selectedRow = null;
}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("id").value = selectedRow.cells[0].innerHTML;
    document.getElementById("studentName").value = selectedRow.cells[1].innerHTML;
    document.getElementById("category").value = selectedRow.cells[2].innerHTML;
    document.getElementById("price").value = selectedRow.cells[3].innerHTML;
}
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.id;
    selectedRow.cells[1].innerHTML = formData.studentName;
    selectedRow.cells[2].innerHTML = formData.category;
    selectedRow.cells[3].innerHTML = formData.price;
}

function onDelete(td) {
        row = td.parentElement.parentElement;
        document.getElementById("studentList").deleteRow(row.rowIndex);
        resetForm();
}
