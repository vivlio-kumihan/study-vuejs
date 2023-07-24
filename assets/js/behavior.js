const app = ({
  data() {
    return {
      count: 0
    }
  },
  methods: {
    countUp() {
      this.count++
    }
  },
  beforeCreate() {
    // Vue.jsを初期化する前に起動するメソッド
    // Vueのインスタンスができる前で変数の初期化やeventListenerなどはない状態。
    console.log('before create ')
    console.log(this.count) // => undefineになる。
  },
  created() {
    // Vue.jsが初期下した直後に起動するメソッド
    console.log('created')
    console.log(this.count) // => 0
    // ただし、HTMLに紐づいていない状態。　
    console.log(document.querySelector('p')) // => null
  },
  beforeMount() {
    // Vue.jsのインスタンスがHTMLに紐づく直前。
    console.log('before mount')
    console.log(document.querySelector('p')) // => null
  },
  mounted() {
    // HTMLにアクセスできる。
    console.log('mounted')
    console.log(document.querySelector('p')) // => <p>0</p>
  },
  // ボタンをクリックすると発火する直前。
  // データがアップデートされる前に実行する。
  beforeUpdate() {
    console.log('before update')
  },
  // ボタンをクリックすると発火する直後。
  // データがアップデートされた後に実行する。
  updated() {
    console.log('updated')
  },
})

Vue.createApp(app).mount('#app')