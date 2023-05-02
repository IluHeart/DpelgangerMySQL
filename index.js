const nav1 = document.querySelector(".nav-1 ul");
const nav2 = document.querySelector(".nav-2 ul");
const abrir = document.querySelector("#Open");


abrir.addEventListener("click", () => {
    nav1.classList.toggle("flex");
})

abrir.addEventListener("click", () => {
    nav2.classList.toggle("flex");
})