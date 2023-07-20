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