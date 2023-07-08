// 変数に値を格納し、
// メソッドを定義し、
// 定義したメソッドにメッセージを送る
const app = ({
  data() {
    return {
      text: 'Hello Vue!',
      count: 1
    }
  },
  methods: {
    changeText(para = 'takahiro') {
      this.text = `hello ${ para }!`
    },
    countUp() {
      this.count++
    }
  }
})
Vue.createApp(app).mount('#app')

