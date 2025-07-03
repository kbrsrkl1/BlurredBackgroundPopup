const containerEl = document.querySelector(".container")
const btnEl = document.getElementById("btn")
const popupEl = document.getElementById("popup")

const closeiconEl = document.getElementById("close-icon")


btnEl.addEventListener("click" , () => {
    containerEl.classList.add("active");
    popupEl.classList.remove("active");
})


closeiconEl.addEventListener("click", () => {
    containerEl.classList.remove("active");
    popupEl.classList.add("active")
})

