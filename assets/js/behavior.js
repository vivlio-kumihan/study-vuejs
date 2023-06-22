const app = ({
  // data: function() {
  data() {
    return {
      // ここで生成したインスタンスをHTMLで出力できる。
      // textContentみたいなもの
      text: 'hello',

      color: 'red',
      display: 'block',
      bgColor: '#999',
      lineHeight: '5',

      active: true,
      versionOne: true,

      // btnStyle: {
      //   margin: '100px auto',
      //   padding: '20px',
      //   color: '#fff',
      //   backgroundColor: '#333',
      //   borderRadius: '5px'
      // }
    }
  },
  methods: {
    btnStyle() {
      return {
        margin: '100px auto',
        padding: '20px',
        color: '#fff',
        backgroundColor: '#333',
        borderRadius: '5px'
      }
    }
  },
})
Vue.createApp(app).mount('#app')