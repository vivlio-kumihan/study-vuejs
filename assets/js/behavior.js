// // mounted()関数を使って要素を取得してみる
// const app = ({
//   data() {
//     return {
//       val: 'hello'
//     }
//   },
//   mounted() {
//     console.log(document.querySelector('h1'))
//   }
// })

// Vue.createApp(app).mount('#app')

const app = ({
  data() {
    return {
    }
  },
  mounted() {
    console.log(this.$refs)
    // => コンソールに情報が出力される。
    // => Proxy(Object) { headOne: h1 }...
    
    console.log(this.$refs.headOne)
    // => <h1>タイトル</h1>と出力される。
    
    // 属性の変更ができる。
    this.$refs.headOne.style.color = 'red'
    
    // リストを取得
    console.log(this.$refs.list)
    
    // リストの属性を変更してみる。
    this.$refs.list.forEach(element => {
      element.style.color = 'blue'
    });


  }
})
Vue.createApp(app).mount('#app')