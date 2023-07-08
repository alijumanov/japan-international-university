// navbar options

let navbarLight = document.getElementById("light-navbar")
let navbarDark = document.getElementById("dark-navbar")

window.addEventListener("scroll", () => {
    if (window.scrollY > 10 && navbarDark) {
        navbarDark.classList.add("light");
    } else if (navbarDark) {
        navbarDark.classList.remove("light");
    }
})

window.addEventListener("scroll", () => {
    if (window.scrollY > 10 && navbarLight) {
        navbarLight.classList.add("dark");
    } else if (navbarLight) {
        navbarLight.classList.remove("dark");
    }
})

// modal options

let navModal = document.querySelector(".nav-modal");

function showModal(item) {
    if (item) {
        navModal.classList.add("show")
    } else {
        navModal.classList.remove("show")
    }
}

// language options

let activeLangs = ["uz", "ru", "en"];
let langs = document.querySelectorAll(".lang");

function changeLang(item) {

    langs.forEach(lang => {
        lang.classList.remove("active-lang")
    });

    for (let i = 0; i < langs.length; i++) {
        if (item == activeLangs[i]) {
            langs[i].classList.add("active-lang")
        }
    }
};

// title options

let activeTitles = ["n1", "n2", "n3", "n4"];
let titles = document.querySelectorAll(".nt");
let texts = document.querySelectorAll(".rt");
let rights = document.querySelectorAll(".rv1");
let rightsRes = document.querySelectorAll(".rv2");

function changeTitle(item) {

    titles.forEach(title => {
        title.classList.remove("active-title")
    });

    texts.forEach(text => {
        text.classList.remove("active-text")
    });

    rights.forEach(right => {
        right.classList.remove("active-right")
    });

    rightsRes.forEach(right => {
        right.classList.remove("active-right")
    });

    for (let i = 0; i < titles.length; i++) {
        if (item == activeTitles[i]) {
            titles[i].classList.add("active-title")
            texts[i].classList.add("active-text")
            rights[i].classList.add("active-right")
            rightsRes[i].classList.add("active-right")
        }
    }
};

rights.forEach(right => {
    right.addEventListener("click", () => {
        navModal.classList.remove("show")
    })
});

rightsRes.forEach(right => {
    right.addEventListener("click", () => {
        navModal.classList.remove("show")
    })
})