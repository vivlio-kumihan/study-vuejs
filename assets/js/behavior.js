Vue.createApp({
  data() {
    return {
      arr: ['信之', '和恵', '茉李'],
      fruit: ['apple', 'banana', 'orange'],
      times: 5,
      family: {
        '父親': { name: '信之', age: '58' },
        '母親': { name: '和恵', age: '53' },
        '娘': { name: '茉李', age: '26' },
      }
    }
  },
  methods: {
    addFruit() {
      return this.fruit.push('grapefruit')
    },
    removeFruit() {
      return this.fruit.splice(1, 1)
    },
    now() {
      return new Date()
    }
  },
  mounted() {
    console.log(this.now())
  }
}).mount('#app')

