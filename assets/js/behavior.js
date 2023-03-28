Vue.createApp({
  data() {
    return {
      unit: "",
      uri: "https://kumihan.com"

    }
  },
  methods: {
    onchange() {
      return `${this.unit.name}: ${this.unit.size}`
    },
    targetBrank() {
      const link = document.querySelector("dd > a").setAttribte("target", "_blank")
      return link
    }
  }
}).mount("#app")