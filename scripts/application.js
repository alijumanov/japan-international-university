// form options

let userData = [];
let form = document.getElementById("app-form");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    let results = e.target
    for (let i = 0; i < results.length; i++) {
        userData.push(results[i].value)
        console.log(userData)
    }
})

// file input options

let trashs = document.querySelectorAll(".trash-img");
let fileNames = document.querySelectorAll("#file-name");
let inputs = document.querySelectorAll(".app-file-input");
let fileResults = document.querySelectorAll("#app-file-name-result");

for (let i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener("change", ({ target }) => {
        let file = target.files[0]
        if (file) {
            fileNames[i].style.display = "flex"
            fileResults[i].innerText = file.name
        }
    });

    trashs[i].addEventListener("click", () => {
        fileNames[i].style.display = "none"
    });
};
