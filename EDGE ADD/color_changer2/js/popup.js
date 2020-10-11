// get the buttons by id
let aliceblue = document.getElementById('aliceblue');
let cornsilk = document.getElementById('cornsilk');
let reset = document.getElementById('reset');

// use tabs.insertCSS to change header color on button click

// aliceblue
aliceblue.onclick = () => {
  alert("ALICE...");
};

// cornsilk
cornsilk.onclick = () => {
  alert("Corn...");
};

// back to original
reset.onclick = () => {
  alert("RESET");
};