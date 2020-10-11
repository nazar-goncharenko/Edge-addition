function deletePrice() {

    var table = document.getElementsByTagName("table")[0];

    var thead = table.getElementsByTagName("thead")[0];

    var tbody = table.getElementsByTagName("tbody")[0];

    var rowHead = thead.getElementsByTagName("tr")[0];

    var rowBody = tbody.getElementsByTagName("tr");

    rowHead.deleteCell(1);

    var index = 1;
    if (rowBody.length === 5) {
        index += 1;
    }
    for (row of rowBody) {
        row.deleteCell(index);
    }
}

deletePrice();