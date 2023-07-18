Vue.createApp({
  data() {
    return {
      fruits: [{
        name: 'apple',
        option: [
          { size: 'large', price: 200 },
          { size: 'middle', price: 150 },
          { size: 'small', price: 100 }
        ]
      }, {
        name: 'banana',
        option: [
          { size: 'large', price: 300 },
          { size: 'middle', price: 350 },
          { size: 'small', price: 200 }
        ]
      }, {
        name: 'orange',
        option: [
          { size: 'large', price: 400 },
          { size: 'middle', price: 450 },
          { size: 'small', price: 300 }
        ]
      }]
    }
  }
}).mount('#app')

