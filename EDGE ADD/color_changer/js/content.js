// get the URL of the page
var url = document.location.href;

function deletePrice() {

    var table = document.getElementsByTagName("table")[0];

    var thead = table.getElementsByTagName("thead")[0];

    var tbody = table.getElementsByTagName("tbody")[0];

    var rowHead = thead.getElementsByTagName("tr")[0];

    var rowBody = tbody.getElementsByTagName("tr");

    rowHead.deleteCell(1);

    var index = 1;
    if (rowBody[0].cells.length === 5) {
        index = 2;
    }
    for (row of rowBody) {
        //console.log(row);
        row.deleteCell(index);
    }
}


// if not on a docs.microsoft.com domain
if (url.indexOf("optitrade.dp.ua") !== -1) {
    try {
        deletePrice();
        throw chrome.runtime.sendMessage({
            "iconPath20": "images/inactive20.png",
            "iconPath40": "images/inactive40.png"
        });
    }
    catch (e)
    {
        console.log("error: " + e);
    }
    
}