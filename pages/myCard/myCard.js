// compents/myCard/myCard.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    showMyCard: false,
    noCard: true,
    showCard: false,
    indicatorDots: false,
    autoplay: false,
    interval: 5000,
    duration: 1000,
    indicatoractiveColor: '#076cc4'
  },

  onShareAppMessage: function(res) {
    let gbid = res.target.dataset.info.order_id;
    return {
      title: '分享这张名片',
      path: '../cardBox/cardDetails',
      imageUrl: '', //用户分享出去的自定义图片大小为5:4,
      success: function(res) {
        // 转发成功
        wx.showToast({
          title: "分享成功",
          icon: 'success',
          duration: 2000
        })
      },
      fail: function(res) {
        // 分享失败
      },
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var that = this;
    wx.getStorage({
      key: 'name',
      success: function(res) {
        that.setData({
          name: res.data
        });
        if (res.data !== '') {
          that.setData({
            noCard: false,
            showCard: true
          })
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
      success: function(res) {
        that.setData({
          phone: res.data
        })
      },
    })
    wx.getStorage({
      key: 'address',
      success: function(res) {
        that.setData({
          address: res.data
        })
      },
    })
    wx.getStorage({
      key: 'email',
      success: function(res) {
        that.setData({
          email: res.data
        })
      },
    })
  },
  go: function(res) {
    var url = res.target.dataset.url;
    wx.navigateTo({
      url: url,
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})