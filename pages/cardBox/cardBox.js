//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    show: false //no card时候隐藏
  },
  go: function (res) {
    var url = res.target.dataset.url;
    console.log(url)
    wx.navigateTo({
      url: url,
    })
  },
  
  onLoad: function(e) {
    var that = this;
    var show = that.data.show;
    wx.getStorage({
      key: 'name',
      success: function(res) {
        console.log(res)
        that.setData({
          name: res.data
        });
        if(res.data!==null){
          that.setData({
            show: true
          })
        }else {
          //显示no card页面
          
        }
      },
    })
    // 得到本地储存数据
    wx.getStorage({
      key: 'post',
      success: function(res) {
        that.setData({
          post: res.data
        })
      },
    })
    wx.getStorage({
      key: 'company',
      success: function(res) {
        that.setData({
          company: res.data
        })
      },
    })
    wx.getStorage({
      key: 'phone',
      success: function (res) {
        that.setData({ phone: res.data })
      },
    })
    wx.getStorage({
      key: 'address',
      success: function (res) {
        that.setData({ address: res.data })
      },
    })
    wx.getStorage({
      key: 'email',
      success: function (res) {
        that.setData({ email: res.data })
      },
    })
    
  },
  
})