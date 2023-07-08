# Vue.jsを学ぶ

## 基本の書式

```html
  <div id="app">
    <!-- マスタッシュで変数を呼び出す。 -->
    {{ text }}
    {{ arr }}
  </div>
```

```js
const app = ({
  // data: function() {
  // ショートハンド
  data() {
    return {
      // 変数に値を格納する。
      text: 'Hello Vue!',           // strings
      arr: ['信之', '和恵', '茉李'],  // array
      profile: {                    // hash
        name: '信之',
        age: 58,
        place: '大阪'
      }
    }
  },
  // jsを埋め込む
  // mounted: function() {
  // ショートハンド
  mounted() {
    console.log('Hello Vue!')
    function greet(para = 'Hello') {
      console.log(`${ para }, Takahiro!`)
    }
    greet('So long')
  },
})
Vue.createApp(app).mount('#app')
```

## sample

`mounted()`で`changeText()`関数が呼ばれたら、
`methods`で定義している値を返すというフォーマット

```js
// 変数に値を格納し、
// メソッドを定義し、
// 定義したメソッドにメッセージを送る
const app = ({
  data() {
    return {
      text: 'Hello Vue!',
    }
  },
  methods: {
    changeText(para = 'takahiro') {
      console.log(`'hello' ${ para }`)
    }
  },
  mounted() {
    this.changeText()
  }
})
Vue.createApp(app).mount('#app')

```

リンクをクリックしたら`changeText()`関数を引数`'kazu'`で実行する。
```html
<div id="app">
  {{ text }}
  <a href="#" v-on:click="changeText('kazu')">method</a>
</div>
```