const app = ({
  // data: function() {
  data() {
    return {
      // ここで生成したインスタンスをHTMLで出力できる。
      // textContentみたいなもの
      text: 'hello',
      text2: 'goodbye',
      text3: '<a href="https://kumihan.com"></a>',
      link: 'https://kumihan.com',
    }
  },
  // ライフサイクル・メソッド
  // 上の処理が終わったらこちらの処理をする
  // ここで、JavaScriptを書ける
  // mounted: function() {
  mounted() {
    this.link = 'https://apple.com'
  }
})
Vue.createApp(app).mount('#app')