// Generate Random Number
document.querySelector(".generate-btn").addEventListener('click', function () {
    let randomNumber = Math.floor(1000 + Math.random() * 9000);
    document.getElementById("pinGenerateInput").value = randomNumber;

});

// Button CLick Event 
let allButton = document.getElementsByClassName('btn');
for (let i = 0; i < allButton.length; i++) {
    allButton[i].addEventListener("click", function () {
        let buttonValue = this.innerText;
        let submitValueInput = document.getElementById("submitValueInput").value;
        let bindvalue = submitValueInput + buttonValue;
        document.getElementById("submitValueInput").value = bindvalue;
    });
}