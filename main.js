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


// Submit Button Event

document.getElementById("submit").addEventListener('click', function () {
    //Submit button Input Value
    let submitValueInput = document.getElementById("submitValueInput").value;
    let submitNumberInput = parseInt(submitValueInput);

    // Random Number input value
    let pinGenerateInput = document.getElementById("pinGenerateInput").value;
    let pinGenerateNumberInput = parseInt(pinGenerateInput);

    // Nth try value
    let notifyOk = document.querySelector(".notify-ok");
    let notifyCross = document.querySelector(".notify-cross");

    // Submit button
    let submitBtn = document.getElementById("submit");

    if (submitNumberInput === pinGenerateNumberInput) {
        notifyOk.style.display = "block";
        notifyCross.style.display = "none";
    } else {
        notifyCross.style.display = "block";
        notifyOk.style.display = "none";

        // nth try left
        let actionLeft = document.getElementById("actionLeft").innerText;
        let actionLeftNumber = parseInt(actionLeft);
        let decreaseActionLeft = actionLeftNumber - 1;
        document.getElementById("actionLeft").innerText = decreaseActionLeft;

        if (decreaseActionLeft == 0) {
            submitBtn.style.background = "#ff3c5f";
            submitBtn.style.pointerEvents = "none";
        }
    }

})

// Delete all
document.querySelector(".btn-cut-all").addEventListener('click', function () {
    document.getElementById("submitValueInput").value = "";
})

// Delete One by One
document.querySelector(".btn-cut-one").addEventListener('click', function () {
    let submitValueInput = document.getElementById("submitValueInput").value;
    let removeLastItem = submitValueInput.slice(0, -1);
    document.getElementById("submitValueInput").value = removeLastItem;
})