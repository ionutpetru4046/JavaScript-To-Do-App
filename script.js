function adaugaObiectiv() {
    let obiectiv = document.getElementById('obiectiv').value;
    let prioritate = document.getElementById('prioritate').value;

    if (obiectiv.length === 0) {
        alert("te rog complecteaza obiectivul!");
        return; 
    } else if (parseInt(prioritate) === 0) {
        alert("te rog complecteaza prioritate!");
        return;
    } else {
        document.getElementById('obiectiv').value = "";
        document.getElementById('prioritate').value = "";
    }

    let li = document.createElement("li");
    let text = document.createTextNode(obiectiv);
    li.appendChild(text);
    li.classList.add("list-group-item");

    let lista;

    switch(parseInt(prioritate)) {
        case 1:
            lista = document.getElementById("prioritate_1");
            break;
        case 2:
            lista = document.getElementById("prioritate_2");
            break;
        case 3:
            lista = document.getElementById("prioritate_3");
            break;
        default:
            alert("te rog sa introduci o prioritate existenta!");
            return;
    }

    li.addEventListener("click", function() {
        li.remove();
    });

    lista.appendChild(li);
}