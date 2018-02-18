// pages/calc/calc.js
const util = require('../../utils/util.js')

Page({
  
  data: {
    date: '',
    time: '15:08'
  },
  onLoad: function (){
    this.setData({
      date: util.formatDate(new Date()),
      time: util.currentTime(new Date())
    })
  },
  bindDateChange: function (e) {
    this.setData({
      date: e.detail.value
    })
  },
  bindTimeChange: function (e) {
    this.setData({
      time: e.detail.value
    })
  }
})