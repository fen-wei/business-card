//logs.js
const util = require('../../utils/util.js')

Page({
  data: {

  },
  onLoad: function () {
    
  },
  dispath:function(){
    wx.navigateTo({

      url: '../xiang/xiang',

    })
  },
  dispath1: function () {
    wx.navigateTo({

      url: '../qin/qin',

    })
  }
})
