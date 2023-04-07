// formにテキスト入力をHTMLへ出力する
// Vannira.js version
// document.getElementById("form").onsubmit = function (event) {
//   event.preventDefault()
//   // console.log(event)
//   let inPutText = document.getElementById("inPutText").value
//   let outPutText = document.querySelector("#out-put-text")
//   outPutText.textContent = `入力されたものは『${ inPutText }』ですね。`
// }

Vue.createApp({
  // data: function() {
  data() {
    return {
      inputText: "入力"
    }
  }
}).mount("#app")
// Vue.createApp({
//   data() {
//     return {
//       map: new Map([
//         ['PHP', 'PHP: Hypertext Preprocessor'],
//         ['JSP', 'Jakarta Server Pages'],
//         ['ASP', 'Active Server Pages']
//       ])
//     }
//   }
// }).mount("#app")
