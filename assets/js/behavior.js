// #1 クリックして『イベント』を取得する。
Vue.createApp({
  methods: {
    onclick(e) {
      console.log(e)
    }
  }
}).mount("#app")