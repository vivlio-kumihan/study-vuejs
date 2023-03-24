// vue
Vue.createApp({
  data() {
    return {
      lang: "選択はしたものは...",
      application: []
    }
  }
}).mount("#app")

// js
// for single
function getSelectValue(name) {
  let result = ""
  let options = document.querySelector(name).options

  for(let opt of options) {
    if(opt.selected) {
      result = opt.value
      break
    }
  }
  return result
}

document.querySelector(".result.single > input").addEventListener("click", function() {
  document.querySelector("#case-js .result.single > p").textContent = getSelectValue("#case-js #lang.apply")
})

// for multipul
function getSelectValueArr(name) {
  let result = []
  let options = document.querySelector(name).options;

  for(let opt of options) {
    if(opt.selected) {
      result.push(opt.value)
    }
  }
  return result
}

document.querySelector(".result.multiple > input").addEventListener("click", function() {
  const reply = getSelectValueArr("#case-js #lang.os").join("・")
  document.querySelector("#case-js .result.multiple > p").textContent = reply
}, false)