let faculties = document.querySelectorAll(".faculty");
let infos = document.querySelectorAll(".drin");

for (let i = 0; i < faculties.length; i++) {
    faculties[i].addEventListener("click", () => {
        faculties.forEach(fac => {
            fac.classList.remove("active-fac")
        });

        faculties[i].classList.add("active-fac")

        infos.forEach(fac => {
            fac.classList.remove("active-infos")
        });

        infos[i].classList.add("active-infos")
    })
}