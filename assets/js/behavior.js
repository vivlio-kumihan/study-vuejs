Vue.createApp({
  // vueの中で使う共通の変数定義場所
  data() {
    return {
      activeTrue: true
    }
  },
  methods: {
    styleChange() {
      return {
        color: this.activeTrue ? "red" : "blue"
      }
    }
  },
  // ライフサイクルメソッド
  // アプリがマウントされてから動く部分
  // とりあえず、ここで自由にJS書いて徐々にVueへ移していくための場所として使える。
  mounted() {
    function greet(name="takahiro") {
      console.log(`hello ${ name }. here is js free!`)
    }
    greet("nobuyuki")
    // thisを使えば、Vueの変数を垣根を超える。
    console.log(this.text)
  }

}).mount("#app")
