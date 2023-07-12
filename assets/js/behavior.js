// クラスとスタイルのバインディング

Vue.createApp({
  data: function() { 
    return {
      text: 'hello vue!',
      // URL（文字列）を変数に格納している。
      link: 'https://apple.com',
      // 要素のスタイル属性を変数に格納する。
      // 文字列として格納する。
      textColor: 'red',
      white: '#fff',
      bgColor: 'green',
      flag: true,
      classActive: true,
      textStyle: {
        fontSize: '20px',
        fontWeight: 'bold',
        color: '#fff',
        backgroundColor: '#999'
      }
    }
  },
  methods: {
    textStyleMethods() {
      return {
        fontSize: '20px',
        fontWeight: 'bold',
        color: this.flag ? 'blue' : 'green',
        backgroundColor: 'red'
      }
    },
    activateClass() {
      return {
        active: this.flag
      }
    }
  }
}).mount('#app')


// // 変数に値を格納し、
// // メソッドを定義し、
// // 定義したメソッドにメッセージを送る
// const app = ({
//   data() {
//     return {
//       text: 'Hello Vue!',
//       count: 1
//     }
//   },
//   methods: {
//     changeText(para = 'takahiro') {
//       this.text = `hello ${ para }!`
//     },
//     countUp() {
//       this.count++
//     }
//   }
// })
// Vue.createApp(app).mount('#app')

