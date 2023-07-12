Vue.createApp({
  data() {
    return {
      text: 'hello vue',
      flag: true,
      count: 1
    }
  },
  methods: {
    changeTxt(name = 'john') {
      // コンソールログに定義した文字列を出力させる。
      console.log(`hello ${ name }`)
      // 受けた引数をHTMLに出力する。
      this.text = `hello ${ name }`
    },
    classFlag() {
      return {
        active: this.flag
      }
    },
    countUp() {
      return {
        count: this.count++
      }
    }
  },
  // JSが読み込まれてから実行したいものを入れる場所
  // 定義したメソッドを実行する場所として使うことができる。
  // mounted: function() {
  mounted() {
    // この場所に、
    // このインスタンス内にある当該のメソッドを実行する。
    this.changeTxt()
  }
}).mount('#app')

