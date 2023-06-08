function addRecord() {
    let name = document.getElementById("name").value;
    let lastName = document.getElementById("lastName").value;
    let inputType = document.getElementById("inputType").value;
    let amount = document.getElementById('amount').value;
    let restaurant = document.getElementById('restaurant').checked;
    let date = document.getElementById('date').value;


    if (name == "") {
        alert("Debes ingresar el nombre");
    } else if (lastName == "") {
        alert("Debes ingresar el apellido");
    } else if(inputType == ""){
        alert("Debes seleccionar tipo de ticket");
    }else if(amount == ""){
        alert("Debes elegir cuántas entradas")

    }else if(date == ""){
        alert("Debes seleccionar una fecha")
    } else {
        let table = document.getElementById("records-table");

            let row = table.insertRow();
            let cellName = row.insertCell();
            let cellLastName = row.insertCell();
            let cellInputType = row.insertCell();
            let cellAmount = row.insertCell();
            let cellRestaurant = row.insertCell();
            let cellDate = row.insertCell();
            let cellAction = row.insertCell();
    
            cellName.innerHTML = name;
            cellLastName.innerHTML = lastName;
            cellInputType.innerHTML = inputType;
            cellAmount.innerHTML = amount;
            cellRestaurant.innerHTML = restaurant ? 'Sí' : 'No';
            cellDate.innerHTML = date;
            cellAction.innerHTML = "<button onclick='editRecord(this)'>Editar</button> <button onclick='removeRecord(this)'>Eliminar</button>";
    
            document.getElementById("name").value = "";
            document.getElementById("lastName").value = "";
            document.getElementById("inputType").value = "";
            document.getElementById("amount").value = "";
            document.getElementById("restaurant").checked = "";
            document.getElementById("date").value = "";
    }


}

function removeRecord(button) {
    let row = button.parentNode.parentNode;
    
    document.getElementById("inputType").value = "";
    document.getElementById("amount").value = "";
    document.getElementById("restaurant").checked = "";
    document.getElementById("date").value = "";
    
    row.parentNode.removeChild(row);
}

function editRecord(button) {
    let row = button.parentNode.parentNode;
    let cell = row.getElementsByTagName("td");

    let name = cell[0].innerHTML;
    let lastName = cell[1].innerHTML;
    let inputType = cell[2].innerHTML;
    let amount = cell[3].innerHTML;
    let restaurant = cell[4].innerHTML;
    let date = cell[5].innerHTML;

    document.getElementById("name").value = name;
    document.getElementById("lastName").value = lastName;
    document.getElementById("inputType").value = inputType;
    document.getElementById("amount").value = amount;
    document.getElementById('restaurant').value = restaurant;
    document.getElementById('date').value = date

    row.parentNode.removeChild(row);
}