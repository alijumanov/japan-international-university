let input = document.getElementById("resume");
let trash = document.querySelector(".trash-img");
let fileName = document.getElementById("file-name");
let fileResult = document.getElementById("file-result-name");

input.addEventListener("change", ({ target }) => {
    let file = target.files[0]
    if (file) {
        fileName.style.display = "flex"
        fileResult.innerText = file.name
    }
});

trash.addEventListener("click", () => {
    fileName.style.display = "none"
});