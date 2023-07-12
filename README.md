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

## メソッド

変数に値を格納し、メソッドを定義し、定義したメソッドにメッセージを送る。

```js
const app = ({
  data() {
    return {
      // 文字列を変数に格納
      text: 'Hello Vue!',
      // 数値を変数に格納
      count: 1
    }
  },
  // メソッドを定義
  methods: {
    // メソッドの引数を変数に代入するメソッド
    changeText(para = 'takahiro') {
      this.text = `hello ${ para }!`
    },
    // このメソッドが呼ばれたら、
    // 設定した変数の値をカウントアップする。
    // リロードするまで状態を記憶しているところがすごい。
    countUp() {
      this.count++
    }
  }
})
Vue.createApp(app).mount('#app')
```

メソッドのトリガーはHTMLに書く。

```html
<div id="app" class="app">
  <!-- 設定した変数をマスタッシュで囲み展開する。 -->
  <a href="">{{ text }}</a> 
  <!-- ボタンのクリックをトリガーにchangeText()メソッドを実行する。 -->
  <button v-on:click="changeText('kazu')">method</button>
  <!-- マウスオーバーをトリガーにcountUp()メソッドを実行する。 -->
  <button v-on:mouseenter="countUp()">{{ count }}</button>
</div>
```

## クラスとスタイルのバインディング

```html

<div id="app" class="app">
  <!-- この要素では、:href=でVue.jsで設定したデータとバインディングを実現している。 -->
  <a :href=link target="_blank">{{ text }}</a> 
  <!-- スタイルは『オブジェクト（ハッシュ）』で記述していく。 -->
  <!-- 属性の書式はキャメルケース。 -->
  <p :style="{ color: textColor }">{{ text }}</p>
  <p :style="{ color: white,  backgroundColor: bgColor }">{{ text }}</p>
  <!-- 論理値を値にクラス属性をつけることが出来る。追加もできる。 -->
  <p :class="{ active: flag, classActive: flag }">{{ text }}</p>
  <!-- 属性の内容を変数とし、内容をVue側で設定することができる。 -->
  <p :style="textStyle">{{ text }}</p>
  <!-- スタイル属性の内容をVue側でメソッドに定義することもできる。 -->
  <p :style="textStyleMethods()">{{ text }}</p>
  <!-- クラス属性にactiveをセットする。 -->
  <p :class="activateClass()">{{ text }}</p>
</div>
```

```js
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
      // 真偽値を代入することでクラスの付け替えをする。
      flag: true,
      classActive: true,
      // スタイル属性をまとめる。
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
```