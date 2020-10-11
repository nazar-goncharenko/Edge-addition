But = document.getElementById('button1');



But.onclick = () => {
    chrome.tabs.executeScript({
        file: 'js/deletePrice.js'
    })
}