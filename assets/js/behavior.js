Vue.createApp({
  data() {
    return {
      agree: "チェックの有無",
      application: ["JavaScript"]
    }
  }
}).mount("#app")

// // Vanilla-js single
// const agree = document.getElementById("yes")
// let singleCheckBox = document.querySelector("#vanilla-js .single")
// document.querySelector(".single .reply.btn").addEventListener("click", function(){
//   if(agree.checked) {
//     singleCheckBox.lastElementChild.textContent = agree.value
//   } else {
//     singleCheckBox.lastElementChild.textContent = "希望しません。"
//   }
// }, false)

// // Vanilla-js multiple
// let multipleCheckBox = document.querySelector(".multiple")
// document.querySelector(".multiple .reply.btn").addEventListener("click", function() {
//   let result = []
//   const subjects = document.querySelectorAll('input[name="study"]')
//   for (let subject of subjects) {
//     if (subject.checked) {
//       result.push(subject.value)
//     }
//   }
//   // console.log(result)
//   if (result.length >= 1) {
//     let str = result.join(" / ")
//     multipleCheckBox.lastElementChild.textContent = str
//   } else {
//     multipleCheckBox.lastElementChild.textContent = "希望しません。"
//   }
// }, false)