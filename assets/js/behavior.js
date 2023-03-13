Vue.createApp({
  data() {
    return {
      path: "./assets/img/cover.jpg"
    }
  },
  methods: {
    onmouseenter() {
      this.path = "./assets/img/p1.jpg"
    },
    onmouseleave() {
      this.path = "./assets/img/p2.jpg"
    },
    onerror() {
      this.path = "./assets/img/p3.jpg"
    }
  }
}).mount("#app")