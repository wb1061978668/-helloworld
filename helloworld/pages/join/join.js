// pages/join/join.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  
  },

 
  tell:function(){
    wx.makePhoneCall({
      phoneNumber: '13477512063' //仅为示例，并非真实的电话号码
    })
  }
})