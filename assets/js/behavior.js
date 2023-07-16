Vue.createApp({
  data() {
    return {
      firstName: 'Nobuyuki',
      lastName: 'Takahiro',
      count: 0
    }
  },
  // メソッド定義に関わりのないHTMLでの動きで
  // 都度値は変更される。
  // 使い所を考える必要があり。
  methods: {
    fullName() {
      return this.firstName + ' ' + this.lastName
    },
    now() {
      return new Date()
    }
  },
  // 最初にHTMLをロードしたら、次にロードし直すまで
  // 状態は変更されない。
  // 引数は渡せない。
  computed: {
    fullNameComputed() {
      return this.firstName + ' ' + this.lastName
    },
    nowComputed() {
      return new Date()
    }
  },
  // method、computedともmountedから呼び出せる。
  mounted() {
    console.log(this.now())
    console.log(this.fullName())
    console.log(this.nowComputed)
    console.log(this.fullNameComputed)
  }
}).mount('#app')





// ///////////////////
// // library/time
// // 時間

// // 現在の日付　インスタンスを生成させる。
// const thisTime = new Date(), 
//       week = ["日曜日", "月曜日", "火曜日", "水曜日", "木曜日", "金曜日", "土曜日"]

// // 現在時間を表示させる。
// document.querySelector(".now").textContent = thisTime

// // 年を抜き出す
// let year = thisTime.getFullYear() + "年"
// // 月を抜き出す。
// let month = thisTime.getMonth() + 1 + "月"
// // 日を抜き出す。
// let day = thisTime.getDate() + "日"
// // 日曜日を0として、各曜日のインデックスを返す。
// let nthDay = week[thisTime.getDay()]
// // 時間（時）を抜き出す。
// let hours = thisTime.getHours() + "時"
// // 時間（分）を抜き出す。
// let minutes = thisTime.getMinutes() + "分"
// // 時間（秒）を抜き出す。
// let seconds = thisTime.getSeconds() + "秒"

// // 確認する。
// console.log(thisTime)
// console.log(month)
// console.log(day)
// console.log(nthDay)
// console.log(hours)
// console.log(minutes)
// console.log(seconds)

// // 現在の日付を取得する。それをリストで表示する。 => createElement("li") appendChild(li)
// let myDate = [year, month, day, nthDay, hours, minutes, seconds]
// myDate.forEach(elem => {
//   let li = document.createElement("li")
//   li.textContent = elem
//   document.querySelector("ul.list-view").appendChild(li)
// });


// n日後の時間を取得する。=> setDate, getDate()

// function outPutDate(ins) {
//   const week = ["日曜日", "月曜日", "火曜日", "水曜日", "木曜日", "金曜日", "土曜日"]
//   let year = ins.getFullYear() + "年"
//   let month = ins.getMonth() + 1 + "月"
//   let day = ins.getDate() + "日"
//   let nthDay = week[ins.getDay()]
//   let hours = ins.getHours() + "時"
//   let minutes = ins.getMinutes() + "分"
//   let seconds = ins.getSeconds() + "秒"
//   let elem = year + month + day + nthDay + hours + minutes + seconds
//   return elem
// }
// // const thisTime = new Date()
// // このまま引数に入れたらエラーになる。
// const nextOne = thisTime.setDate(thisTime.getDate() + 25) 
// console.log(nextOne)
// // const nextTwo = nextOne.setDate(nextOne.getDate() + 25) 
// document.querySelector('.now').textContent = outPutDate(nextOne)

// const dayAfter = [0, 26, 26, 26],
//       thisTime = new Date()
// dayAfter.forEach(days => {
//   (thisTime.setDate(thisTime.getDate() + days))
//   console.log(thisTime)
//   document.querySelector('.now').textContent = outPutDate(thisTime)
  
// });



// // 今の時間を取得する。
// console.log(outPutDate(thisTime))
// document.querySelector(".today").textContent = outPutDate(thisTime)

// // 1日後の時間を取得する。
// document.querySelector(".future-day").textContent = outPutDate(thisTime)
// // n日後の時間を取得する。=> setDate, getDate()


// // 期間を取得する。
// const thisTime = new Date()

// function outPutDate(ins) {
//   const week = ["日曜日", "月曜日", "火曜日", "水曜日", "木曜日", "金曜日", "土曜日"]
//   let year = ins.getFullYear() + "年"
//   let month = ins.getMonth() + 1 + "月"
//   let day = ins.getDate() + "日"
//   let nthDay = week[ins.getDay()]
//   let hours = ins.getHours() + "時"
//   let minutes = ins.getMinutes() + "分"
//   let seconds = ins.getSeconds() + "秒"
//   let elem = year + month + day + nthDay + hours + minutes + seconds
//   return elem
// }

// // 期間を読み取れた単位で変換する。
// const targetTime = new Date(2045, (3 - 1), 31)
// // nマイクロ秒 => 秒
// let eraSec = (targetTime - thisTime) / 1000
// // 秒 => 分
// let eraMin = eraSec / 60
// // 分 => 時
// let eraHor = eraMin / 60
// // 時 => 日
// let eraDay = eraHor / 24
// // 日 => 年
// let eraYer = eraDay / 365