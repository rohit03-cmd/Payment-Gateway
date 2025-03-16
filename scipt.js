// script.js
function updateTotal() {
    let total = 0;
    const selectedOption = document.querySelector('input[name="bundle"]:checked');
    if (selectedOption) {
        total = selectedOption.value;
    }
    document.getElementById("total-price").innerText = total;
}

function showOptions() {
    const optionsDiv = document.getElementById("size-color-options");
    const threePairSelected = document.getElementById("three-pair").checked;
    if (threePairSelected) {
        optionsDiv.classList.add("visible");
    } else {
        optionsDiv.classList.add("visible");
    }
}

function addToCart() {
    alert("Items added to cart!");
}
