let selector = document.getElementById("edu-type");
let typeResults = document.querySelectorAll(".type-result");
let priceResults = document.querySelectorAll(".price-result");

selector.addEventListener("change", (e) => {

    typeResults.forEach(result => {
        result.innerText = e.target.value
    })

    priceResults.forEach(result => {
        if (e.target.value == "Kunduzgi ta'lim") {
            result.innerText = "25 000 000 so‘m yiliga"
        } else if (e.target.value == "Kechki ta'lim") {
            result.innerText = "25 000 000 so‘m yiliga"
        } else if (e.target.value == "Sirtqi ta'lim") {
            result.innerText = "14 000 000 so‘m yiliga"
        }
    })
})