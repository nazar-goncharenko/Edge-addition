function rename() {
    console.log(url);
    events = document.getElementsByClassName("price-detached");
    console.log(events[0]);
    for (event_ of events) {
        event_.style.fontSize = 14 + 'px';
        //if (event_.innerText) {
        //    event_.innerText = " "
        //}
        //else
        //    if (event_.textContent) {
        //        event_.textContent = "";
        //    }
    }
}
rename();