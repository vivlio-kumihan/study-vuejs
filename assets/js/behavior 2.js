const app = ({
  data() {
    return {
      range: 50,
      color: '#555'
    }
  }
})
Vue.createApp(app).mount('#app')