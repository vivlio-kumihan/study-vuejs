// vue
Vue.createApp({
  data() {
    return {
      pet: "選択したのは...",
      food: "選択したのは...",
      subject: "選択したのは..."
    }
  }
}).mount("#app")

// js
function getRadioValue(name) {
  let result = ""
  let elements = document.querySelectorAll(`input[name="${name}"]`)
  for (let elem of elements) {
    if (elem.checked) {
      result = elem.value
      break
    }
  }
  return result
}

document.querySelector("#btn").addEventListener("click", function () {
  document.querySelector("#for-js").textContent = getRadioValue("subject")
  console.log(getRadioValue("subject"))
}, false);

  