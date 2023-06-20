const app = ({
  // data: function() {
  data() {
    return {
      // ここで生成したインスタンスをHTMLで出力できる。
      // textContentみたいなもの
      text: 'hello',
      // 変数
      a: 1,
      // 配列
      arr: ['a', 'b'],
      // 連想配列
      hash: {
        name: 'nobuyuki'
      }
    }
  },
  // ライフサイクル・メソッド
  // 上の処理が終わったらこちらの処理をする
  // ここで、JavaScriptを書ける
  // mounted: function() {
  mounted() {
    // 関数を定義して。。。
    function greet(arg = 'hello') {
      console.log(arg)
    }
    // コンソールへ出力してみる。
    greet('good night')
    // ここのインスタンスは『this』
    console.log(this.text)
  }
})
Vue.createApp(app).mount('#app')