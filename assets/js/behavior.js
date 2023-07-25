const app = ({
  data() {
    return {
      flag: false,
      visible: true,
      langContents: [
        {
          name: 'HTML',
          contents: 'HTMLの説明です。<br>改行のテスト。br>改行のテスト。',
        },
        {
          name: 'CSS',
          contents: 'CSSの説明です。<br>改行のテスト。br>改行のテスト。',
        },
        {
          name: 'JavaScript',
          contents: 'JavaScriptの説明です。<br>改行のテスト。br>改行のテスト。',
        }
      ]
    }
  },
  computed: {
    // 『reduce』
    // forEachと同じでインスタンを回すメソッド
    // アクティブになっているインスタンスの数をカウントするメソッド
    numOpen() {
      return this.langContents.reduce((count, item) => 
      // 三項演算子でtrueだったら『count』へ『1』を足していく。
      // オプションは初期値。
        count + (item.isShow ? 1 : 0), 0)
    }
  },
  created() {
    this.langContents.forEach(element => {
      element.isShow = false
      // console.log(this.langContents)
    })
  }
})
Vue.createApp(app).mount('#app')