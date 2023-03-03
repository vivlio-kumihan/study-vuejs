Vue.createApp({
    data: () => {
        return {
            message: "hello, vue!",
            url: "https://kumihan.com",
            flag: false
        }
    }
}).mount("#app")

const input = document.querySelector("input")
input.addEventListener("click", () => {
    const outPut = document.querySelector("dd")
    outPut.textContent = "hello, world!"
})