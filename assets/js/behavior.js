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
    // // 変化した後の値が引数に入る。
    // // 引数を与えない場合、methodsで定義した
    // // メソッドと同じ反応をする。
    // // つまり、『count』を出力し続ける。
    // count() {
    //   console.log('count')
    // }

    // // 引数を与えると計算し終わった値を
    // // 出力する。
    // count(arg) {
    //   console.log(arg)
    // }

    // // 計算元と計算後の値を引数にできる。
    // count(newValue, oldValue) {
    //   console.log(newValue, oldValue)
    // }

    // // オブジェクトを操作する際の注意
    // // クリックするとHTMLで与えた値に変更はできるが、
    // // こちらで定義している内容は無視される。
    // info() {
    //   console.log('情報を更新しました。')
    // }
    
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