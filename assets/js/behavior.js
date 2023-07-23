const app = ({
  data() {
    return {
      // ボタンを選択する前の状態はfalseが定石
      flag: false,
      age: [],
      areaList: [
        '大阪',
        '京都',
        '神戸',
      ],
      // 空の文字列でもいいが、
      // 属性checkedの代わりに初期値を設定する。
      checkedArea: '大阪',
      selectedArea: '大阪',
    }
  }
})
Vue.createApp(app).mount('#app')