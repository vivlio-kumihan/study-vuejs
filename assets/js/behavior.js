Vue.createApp({
  data() {
    return {
      str: "配列を文字列で表示させる。",
      arrDigit: [1, 2, 3, 4],
      arrName: ["信之", "和恵", "茉李"]
    }
  },
  computed: {
    toStringOne: function() {
      return this.arrDigit.join("-")
    }
  },
  methods: {
    toStringTwo: function() {
      // // for of version
      // let tmpArr = []
      // for (let firstName of this.arrName) {
      //   let fullName = `高広${firstName}`
      //   tmpArr.push(fullName)
      // }
      // return fullName.join("、")

      // // forEach version
      // let fullName = []
      // this.arrName.forEach(firstName => {
      //   fullName.push("高広" + firstName)        
      // })
      // return fullName.join("、")
      
      // map version
      const fullName = this.arrName.map(firstName => {
        return "高広" + firstName
      });
      return fullName.join("、")
    }
  }
}).mount("#app")