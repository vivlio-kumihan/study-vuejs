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
  // dataオプションは『関数』を受ける。
  data: function() { 
    return {
      text: 'hello vue!',
      // URL（文字列）を変数に格納している。
      link: 'https://apple.com',
      // 要素のスタイル属性を変数に格納する。
      // 文字列として格納する。
      // 注意点は、
      // 属性はキャメルケース。
      // 値は『"xxx"』括る。
      textColor: 'red',
      white: '#fff',
      bgColor: 'green',
      // 真偽値を変数に格納する。
      flag: true,
      // クラス名を真偽値で切り替える。
      classActive: true,
      // スタイル属性をオブジェクトとして格納する。
      textStyle: {
        fontSize: '20px',
        fontWeight: 'bold',
        color: '#fff',
        backgroundColor: '#999'
      }
    }
  },
  // メソッド定義
  // メソッドのオプションは『オブジェクト』を受ける。
  // この違い認識しておく。
  methods: {
    // 関数を呼び出して設定されているオブジェクトの項目を代入する。
    textStyleMethods() {
      return {
        fontSize: '20px',
        fontWeight: 'bold',
        // 三項演算子を刷り込む、これは必須。
        color: this.flag ? 'blue' : 'green',
        backgroundColor: 'red'
      }
    },
    // 関数を呼び出して真偽を変数の値によって切り替える。
    // すぐ出てくるように。
    activateClass() {
      return {
        active: this.flag
      }
    }
  }
}).mount('#app')
```

## メソッド

```html
<div id="app" class="app">
  <!-- メソッドを使ってクラスを変更する。 -->
  <!-- <p v-bind:class="classFlag()">{{ text }}</p> -->
  <!-- 省略形 -->
  <p :class="classFlag()">{{ text }}</p>

  <!-- クリックしたらコンソールに引数の値を反映させたテキストを出力する。 -->
  <!-- <button v-on:click="changeTxt('takahiro')">call method</button> -->
  <!-- 省略形 -->
  <button @click="changeTxt('takahiro')">call method</button>

  <!-- countUpメソッドを適用して値をクリックする度に変更する仕組み。 -->
  <button @click="countUp()">{{ count }}</button>
  <!-- マウスオーバーの例 -->
  <button @mouseenter="countUp()">{{ count }}</button>
</div>
```

```js
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
```

## モーダルウィンドウ　--methodを使ったメニューの切り替え

たったこれだけのコードで実現できることの凄さを実感。

```js
Vue.createApp({
  data() {
    return {
      flag: false
    }
  }
}).mount('#app')
```

```scss
.app 
  display: flex
  flex-direction: column
  align-items: center
  width: min(600px, 100%)
  margin: 0 auto
  padding-top: 50px
  font-size: 14px
  font-weight: bold
  text-transform: uppercase
  p
    text-transform: none
  button
    margin-top: 30px
    padding: 10px 20px
    text-align: center
    color: #fff
    background-color: #999
    border-radius: 3px
  nav
    position: fixed
    top: 0
    right: 0
    width: 20vw
    margin: 0 auto
    padding: 20px 0
    text-align: center
    font-size: 12px
    color: #fff
    background-color: #eee
    border-bottom-left-radius: 5px
    transition: .3s
    transform: translateX(100%)
    opacity: 0
    &.active
      transform: translateX(0)
      opacity: 1
    ul
      li
        padding-bottom: 20px
        border-bottom: 1px solid #aaa
        + li
          margin-top: 20px
        a
          display: inline-block
          padding: 5px 10px
          border-radius: 3px
          background-color: #52528c
    button
      margin-top: 20px
      padding: 5px 10px
      background-color: #ff6f00
  .mask
    position: fixed
    top: 0
    left: 0
    width: 100vw
    height: 100vh
    background-color: rgba(0, 0, 0, .5)
    transition: .5s
    visibility: hidden
    opacity: 0
    &.active
      visibility: visible
      opacity: 1
```

### 01 HTML

とりあえず、ボタンをクリックしたら、右メニューが出てきて背景が暗くなる。
マスクをクリックしてtoggleが機動するまでをやってみる。

ここでは、ボタンの名称がtoggleする度に変化するのがミソ。

```html
<!-- #01 -->
<div id="app" class="app">
  <!-- toggleのやり方　コツ　@click="flag = !flag" -->
  <!-- Vueでは、dataオプションに『flag: false』と設定している。 -->
  <p>flag is {{ flag }}</p>
  <p>!flag is {{ !flag }}</p>
  <!-- @click="flag = !flag" === クリックしたら『@click="flag = true"』という意味。 -->
  <!-- で、その状態で、flagは『true』で、条件分岐を通して『close menu』の文字列になり、 -->
  <!-- あとは、状態を相互にスイッチする動きになる。 -->
  <button @click="flag = !flag">{{ flag ? 'close menu' : 'open menu'}}</button>
  <!-- マスクがアクティブな状態。マスクをクリックするとマスクを隠したい。 -->
  <!-- で、ここで驚きは、クリックすると全ての状態が逆スイッチ押されることになる。 -->
  <div class="mask" :class="{ active: flag }" @click="flag = !flag"></div>
  <ul :class="{ active: flag }">
    <li><a href="">menu1</a></li>
    <li><a href="">menu2</a></li>
    <li><a href="">menu3</a></li>
  </ul>
</div>
```

### 02 HTML

__Vue.js版　モーダルウィンドウを作成するために元になるコード__
メニューに閉じるボタンを追加した最終バージョン。

```html
<!-- #02 -->
<div id="app" class="app">
  <!-- toggleのやり方　コツ　@click="flag = !flag" -->
  <!-- Vueでは、dataオプションに『flag: false』と設定している。 -->
  <p>flag is {{ flag }}</p>
  <p>!flag is {{ !flag }}</p>
  <button @click="flag = !flag">open menu</button>
  <!-- マスクがアクティブな状態。マスクをクリックするとマスクを隠したい。 -->
  <!-- で、ここで驚きは、クリックすると全ての状態が逆スイッチ押されることになる。 -->
  <div class="mask" :class="{ active: flag }" @click="flag = !flag"></div>
  <nav :class="{ active: flag }">
    <ul >
      <li><a href="">menu1</a></li>
      <li><a href="">menu2</a></li>
      <li><a href="">menu3</a></li>
    </ul>
    <!-- maskと同じようにメニューのボタンをクリックしたら逆スイッチを起動する。 -->
    <button @click="flag = !flag">close</button>
  </nav>
</div>
```

## Vue.jsのmethodとcomputedについて解説！ methodsの違いとは？ キャッシュしてくれるとは？

```html
<body>  
  <div id="app" class="app">
    <p>dataオプションの変数firstNameの中身 => "{{ firstName }}"</p>
    <p>メソッド定義 fullName()メソッドは返す => {{ fullName() }}</p>
    <p>コンピューテッドは => {{ fullNameComputed }}</p>
    <p>メソッド定義 now()メソッドは返す =>{{ now() }}</p>
    <p>コンピューテッドは => {{ nowComputed }}</p>
    <!-- ボタンをクリックしてHTML上の表示を変えてみる。 -->
    <!-- メソッド定義では、可変の値はその都度変更される。 -->
    <button @click="count++">{{ count }}</button>
  </div>
```

```js
Vue.createApp({
  data() {
    return {
      firstName: 'Nobuyuki',
      lastName: 'Takahiro',
      count: 0
    }
  },
  // メソッド定義に関わりのないHTMLでの動きで
  // 都度値は変更される。
  // 使い所を考える必要があり。
  methods: {
    fullName() {
      return this.firstName + ' ' + this.lastName
    },
    now() {
      return new Date()
    }
  },
  // 最初にHTMLをロードしたら、次にロードし直すまで
  // 状態は変更されない。
  // 引数は渡せない。
  computed: {
    fullNameComputed() {
      return this.firstName + ' ' + this.lastName
    },
    nowComputed() {
      return new Date()
    }
  },
  // method、computedともmountedから呼び出せる。
  mounted() {
    console.log(this.now())
    console.log(this.fullName())
    console.log(this.nowComputed)
    console.log(this.fullNameComputed)
  }
}).mount('#app')
```

## 条件付きレンダリング　v-if, v-show. 条件に応じて表示を切替

