//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    imgUrls: [
      '/img/swiper01.jpg',
      '/img/swiper02.jpg',
      '/img/swiper03.jpg'
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 1000,
    duration: 1000,
    proList:null
  },
  onLoad:function(){
    this.setData({
      test:'01',
    });
    this.getTheproList();
  },
  toDetail:function(e){
    console.log(e);
    var index = e.currentTarget.dataset.index;
    console.log(index);
    let title = this.data.proList[index].title;
        wx.navigateTo({
           url: '/pages/detail/detail?title='+title,
         })
  },
  getTheproList:function(){
    var self = this;
    // wx.request({
    //   url: 'http://localhost/a/getsuccess/require',
    //   method:'get',
    //   success:function(res){
    //     console.log(res.data);
    //     self.setData({
    //       proList: res.data
    //     })
    //   }
    // })
    self.setData({
      proList: [
        {
          logo: '/img/pro_01.jpg',
          title: '贷款标题',
          desc: '贷款内容贷款内容贷款内容贷款内容贷款内容贷款内容'
        },
        {
          logo: '/img/pro_02.jpg',
          title: '贷款标题2',
          desc: '贷款内容2贷款内容贷款内容贷款内容贷款内容贷款内容'
        },
        {
          logo: '/img/pro_03.jpg',
          title: '贷款标题3',
          desc: '贷款内容贷3款内容贷款内容贷款内容贷款内容贷款内容'
        }
      ]
        })
  },
  copy(){
    if (wx.setClipboardData){
      wx.setClipboardData({
        data: '这是我要复制的内容22',
        success: function (res) {
          wx.showModal({
            title: '提示',
            content: '内容已成功复制',
            success: function (res) {
              console.log('用户点击确定')
            }
          });
        }
      });
    }else{
      wx.showModal({
        title: '提示',
        content: '您的微信版本较低请升级微信',
        success: function (res) {
          console.log('用户点击确定')
        }
      });
    }

  }
})
