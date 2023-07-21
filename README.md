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

### 01 v-if, v-show

```html
  <div id="app" class="app">
    <!-- toggleスイッチの書き方を覚えること。 -->
    <!-- 『もっと見る』で使えるそうだ。確認すること。 -->
    <button @click="isShow = !isShow">toggle switch</button>
    <!-- data()オプションのisShow属性の値（true or false）が入る。 -->
    <!-- v-if => その存在を消す。コメントアウトになる。 -->
    <p v-if="isShow">組版.com</p>
    <p v-show="isShow">組版.com</p>
  </div>
```

```js
Vue.createApp({
  data() {
    return {
      isShow: false
    }
  }
}).mount('#app')
```

### 02 v-if, v-else-if, v-else 

```html
<div id="app" class="app">
  <div class="wrapper">
    <!-- toggleスイッチの書き方を覚えること。 -->
    <!-- 『もっと見る』で使えるそうだ。確認すること。 -->
    <button @click="isShow = !isShow">toggle switch</button>
    <!-- data()オプションのisShow属性の値（true or false）が入る。 -->
    <!-- v-if => その存在を消す。コメントアウトになる。 -->
    <p v-if="isShow">組版.com</p>
    <p v-else>kumihan.co</p>
  </div>
  <div class="wrapper">
    <button @click="count++">{{ count }}</button>
    <p v-if="count % 3 === 0">Vue.js</p>
    <p v-else-if="count % 3 === 1">GSAP</p>
    <p v-else>HTML, CSS</p>
  </div>
  <div class="wrapper">
    <button @click="count++">{{ count }}</button>
    <tmplate v-if="count % 3 === 0">
      <p>Vue.js</p>
    </tmplate>
    <template v-else-if="count % 3 === 1">
      <p>GSAP</p>
    </template>
    <template v-else>
      <p>HTML, CSS</p>
    </template>
  </div>
</div>
```

## v-html

外部ファイルから読み込んできたインスタンスにHTMLが含まれる場合の対処で使うことがある。

```html
  <div id="app">
    <!-- ショートハンドはマスタッシュの書き方 -->
    <!-- <p>{{ text }}</p> -->
    <!-- XSSの防止。タグを埋め込んだ変数をやり取りするなら『v-text』 -->
    <p v-text="text"></p>
    <!-- HTMLとして埋め込みたければ『v-html』 -->
    <p v-html="text"></p>
  </div>
```

```js
Vue.createApp({
  data() {
    return {
      text: "<a href='#'>hello anchor</a>",
    }
  }
}).mount('#app')
```

## v-for

#### v-forに至る元の考え方

```html
<div id="app">
  <!-- <ul>
    <li>{{ arr[0]}}</li>
    <li>{{ arr[1]}}</li>
    <li>{{ arr[2]}}</li>
  </ul> -->
```

#### v-forで回す

```html
  <ul>
    <li v-for="(ins, idx) in arr">
      {{ idx }} => {{ ins }}
    </li>
  </ul>
```

#### v-vind:keyを付ける

`v-for`を設定するときは必ず`:key="fruit"`をつける。
この場合だと、値が増える度に再度全てを描写し直すから。

```html
  <ul>
    <button @click="addFruit">クリックしたら種類を増やす</button>
    <li v-for="(ins, idx) in fruit" v-vind:key="fruit">
      {{ idx }} => {{ ins }}
    </li>
  </ul>

  <ul>
    <button @click="removeFruit">クリックしたら種類を減らす</button>
    <li v-for="(ins, idx) in fruit" :key="fruit">
      {{ idx }} => {{ ins }}
    </li>
  </ul>
```

#### `Ruby`の`.times`みたいなことができる

```html
  <ul>
    <li v-for="n in times">
      {{ n }}つ目のリスト
    </li>
  </ul>
```

#### hashを回す

```html
  <dl v-for="(val, key, idx) in family" :key="key">
    <dt>{{ idx + 1 }}. {{ key }}</dt>
    <dd>名前：{{ val.name }}</dd>
    <dd>年齢：{{ val.age }}才</dd>
  </dl>
</div>
```

### JavaScript

```js
Vue.createApp({
  data() {
    return {
      arr: ['信之', '和恵', '茉李'],
      fruit: ['apple', 'banana', 'orange'],
      times: 5,
      family: {
        '父親': { name: '信之', age: '58' },
        '母親': { name: '和恵', age: '53' },
        '娘': { name: '茉李', age: '26' },
      }
    }
  },
  methods: {
    addFruit() {
      return this.fruit.push('grapefruit')
    },
    removeFruit() {
      return this.fruit.splice(1, 1)
    },
    now() {
      return new Date()
    }
  },
  mounted() {
    console.log(this.now())
  }
}).mount('#app')
```

## v-forの中でv-forを回す

簡単な例を使って暗誦する。
- objectの書き方をまずは覚える。
- v-forの書き方を覚える。

```js
Vue.createApp({
  data() {
    return {
      fruits: [{
        name: 'apple',
        option: [
          { size: 'large', price: 200 },
          { size: 'middle', price: 150 },
          { size: 'small', price: 100 }
        ]
      }, {
        name: 'banana',
        option: [
          { size: 'large', price: 300 },
          { size: 'middle', price: 350 },
          { size: 'small', price: 200 }
        ]
      }, {
        name: 'orange',
        option: [
          { size: 'large', price: 400 },
          { size: 'middle', price: 450 },
          { size: 'small', price: 300 }
        ]
      }]
    }
  }
}).mount('#app')
```

```html
<div id="app" class="app">
  <p>{{ fruits }}</p>
  <ul>
    <li v-for="fruit in fruits" :key="fruit.name">{{ fruit.name  }}
      <ul>
        <p v-for="opt in fruit.option" :key="opt">{{ opt.size }} => {{ opt.price }}円</p>
      </ul>
    </li>
  </ul>
</div>
```

## watch

```html
  <div id="app" class="app">
    <button @click="count += 2">button</button>
    <p>{{ count }}</p>

    <!-- オブジェクトを操作する際の注意 -->
    <!-- <button @click="info.name = '和恵'">button</button>
    <p>{{ info.name }}</p> -->
    
    <button @click="info.name = '和恵'">button</button>
    <p>{{ info.name }}</p>
  </div>
</body>
```

```js
Vue.createApp({
  data() {
    return {
      count: 0,
      info: {
        name: '信之'
      }
    }
  },
  watch: {
    // 変化した後の値が引数に入る。
    // 引数を与えない場合、methodsで定義した
    // メソッドと同じ反応をする。
    // つまり、『count』を出力し続ける。
    count() {
      console.log('count')
    }

    // 引数を与えると計算し終わった値を
    // 出力する。
    count(arg) {
      console.log(arg)
    }

    // 計算元と計算後の値を引数にできる。
    count(newValue, oldValue) {
      console.log(newValue, oldValue)
    }

    // オブジェクトを操作する際の注意
    // クリックするとHTMLで与えた値に変更はできるが、
    // こちらで定義している内容は無視される。
    info() {
      console.log('情報を更新しました。')
    }
    
    info: {
      handler() {
        console.log('情報を更新しました。')
      },
      // オブジェクトの値に変更があった場合に
      // 定義した内容を実行できるオプション。
      deep: true,
      // HTML上で値の変更をする前に
      // 定義した内容を実行するオプション。
      immediate: true
    }
  }
}).mount('#app')
```

## v-model input要素

```html
<div id="app" class="app">
  <!-- type="text"はデフォルト。だから消しておく。 -->
  <!-- v-modelが作動中。value="hoge"を書いても反映されない。なので消しておく。 -->
  <input v-model="name">
  <p>{{ name }}</p>
  <!-- この状態で入力枠内を編集するとp要素にあるマスタッシュ内の値が変化する。 -->
  <input v-model="name">
  <p>{{ name }}</p>
  <!-- 数値 -->
  <input v-model="number">
  <p>{{ number }}</p>
  <!-- パスワード -->
  <input v-model="passWord" type="password">
  <p>{{ passWord }}</p>
  <!-- 時間 -->
  <input v-model="time" type="time">
  <p>{{ time }}</p>
  <!-- 範囲 -->
  <input v-model="range" type="range" min="1" max="100" step="1">
  <p>{{ range }}</p>
  <!-- 可変な変数を使って要素を操作する。書体の大きさを変化せさる。 -->
 <input v-model="range" type="range" min="1" max="100" step="1">
  <p :style="{ fontSize: `${ range }px` }">{{ range }}</p>
  <!-- 可変な変数を使って要素を操作する。書体の色を変化せさる。 -->
  <input v-model="color" type="color">
  <p :style="{ backgroundColor: `${ color }`}">{{ color }}</p>
</div>
```

```js
const app = ({
  data() {
    return {
      name: 'takahiro',
      number: 6503,
      passWord: 'shadow123',
      time: '13:31',
      range: 100,
      color: '#ddd'
    }
  }
})
Vue.createApp(app).mount('#app')
```

## form

### 属性について
- `action` => データの送信先
- `method` => `post` と `get`
- `name` => 任意で名前はつけられる。JSからの操作で鍵になる。

```html
<form action="" method="" name="contact">
  <!-- テキスト入力欄 -->
  <input type="text">
  <button type="submit">send now</button>
  <input type="submit" value="send now">
</form>
```

### formのフォーマット

```html
<form action="" method="" name="contact">
  <dl>
    <div>
      <dt>お名前</dt>
      <dd><input type="text"></dd>
    </div>
    <div>
      <dt>お名前</dt>
      <dd><input type="text"></dd>
    </div>
  </dl>
  <button type="submit">send now</button>
</form>
```

## form実践

属性値　hidden
ipアドレスの入力を隠して、ユーザーが送信と同時に送る

属性値　reset
hoverしたらポインターが指に変わる。
計算ソフトで使えそう。

属性値　date
ブラウザによって実装が違うので場所を選ぶ。

```html  
<div id="app" class="app">
  <form action="" method="post">
    <dl>
      <div>
        <dt>name</dt>
        <dd><input type="text"></dd>
      </div>
      <div>
        <dt>age</dt>
        <dd><input type="number"></dd>
      </div>
      <div>
        <dt>tel</dt>
        <dd><input type="tel"></dd>
      </div>
      <div>
        <dt>password</dt>
        <dd><input type="password"></dd>
      </div>
      <div>
        <!-- ヴァリデーションをブラウザがかけてくれる。 -->
        <dt>e-mail</dt>
        <dd><input type="email"></dd>
      </div>
      <div>
        <dt>search</dt>
        <dd><input type="search"></dd>
      </div>
      <div class="fader-wrapper">
        <dt>range</dt>
        <dd>
          <input v-model="range" type="range" min="1" max="50" step="1" class="fader">
          <p :style="{ fontSize: `${ range }px` }">{{ range }}<small>px</small></p>
        </dd>
      </div>
      <div>
        <dt>file</dt>
        <dd><input type="file"></dd>
      </div>
      <div class="hidden">
        <dt>hidden</dt>
        <dd><input type="hidden"></dd>
      </div>
      <div>
        <dt>reset</dt>
        <dd><input type="reset"></dd>
      </div>
      <div>
        <dt>date</dt>
        <dd><input type="date"></dd>
      </div>
      <div class="color">
        <dt>color</dt>
        <dd>
          <input v-model="color" type="color">
          <p :style="{ color: `${ color }`}">{{ color }}</p>
        </dd>
      </div>
    </dl>
    <button type="submit">send</button>
  </form>
</div>
```

```scss
@use "../forwards" as fw

form, div, dl, dt
  font-size: .75rem
  font-weight: 900
  letter-spacing: .07em
  text-transform: uppercase
  
.app
  display: flex
  flex-direction: column
  align-items: center
  padding-top: 50px
  form
    width: 50%
    padding: 30px
    text-align: center
    background-color: #eee
    border-radius: 5px
    div
      display: flex
      align-items: center
      background-color: #aaa 
      border-radius: 5px
    dl
      div
        dt
          width: 30%
          text-align: center
        dd
          width: 70%
          input
            width: 100%
            text-align: left
            text-transform: none
            border-top-left-radius: unset
            border-bottom-left-radius: unset
        &.fader-wrapper
          padding: 15px 7px
          .fader
            -webkit-appearance: none // これ無しだとスタイルがほぼ全く反映されないので注意
            appearance: none
            cursor: pointer // カーソルを分かりやすく
            background: #c2dff6 // バーの背景色
            height: 14px // バーの高さ
            width: 100% // スライダーの幅
            border-radius: 10px // バーの端の丸み
            border: solid 3px #e2effa // バーまわりの線
            outline: 0 // アウトラインを消して代わりにfocusのスタイルをあてる
            &::-webkit-slider-thumb
              +fw.slider-thumb
              -webkit-appearance: none // デフォルトのつまみのスタイルを解除
            &::-moz-range-thumb
              +fw.slider-thumb
              border: none
        p
          margin: 0
        + div
          margin-top: 20px
      .hidden
        height: 40px
      .color
        dd
          height: 60px
          input
            padding: 5% 15%
            height: 100%
          p
            margin-top: 10px
            font-size: 1.5rem
  input, button
    padding: 10px 20px
    background-color: #fff
    border-radius: 5px
  button
    margin-top: 50px
    font-size: 1.1rem
    color: #fff
    background-color: #79b5ed
    &:hover
      opacity: .7
  p
    line-height: 1
    margin: 10px 0 30px
```

```js
const app = ({
  data() {
    return {
      range: 50,
      color: '#555'
    }
  }
})
Vue.createApp(app).mount('#app')
```