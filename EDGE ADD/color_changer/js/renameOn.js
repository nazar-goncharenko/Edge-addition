function rename() {
    console.log(url);
    events = document.getElementsByClassName("price-detached");
    console.log(events[0]);
    for (event_ of events) {
        event_.style.fontSize = 1 + 'px';
    }
}
rename();