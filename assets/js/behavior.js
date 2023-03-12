Vue.createApp ({
  data() {
    return {
      localTime: ""
    }
  },
  methods: {
    onclick() {
      this.localTime = new Date().toLocaleDateString()
    }
  }
}).mount("#app")