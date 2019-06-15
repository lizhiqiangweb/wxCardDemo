Page({

  /**
   * 页面的初始数据
   */
  data: {
    numCount: 0,
    isShow: true,
    imgSrc: ''
  },
  // 监听企业介绍字数
  articlesIndex: function(e) {
    var numCount = e.detail.value.length;
    this.setData({
      numCount
    })
  },
  // 选择图片
  chooseImage: function() {
    var that = this,
      pics = that.data.pics;
    wx.chooseImage({
      count: 1, // 最多可以选择的图片张数，默认1
      sizeType: ['original', 'compressed'], // original 原图，compressed 压缩图，默认二者都有
      sourceType: ['album', 'camera'], // album 从相册选图，camera 使用相机，默认二者都有
      success: res => { //es6写法  success: function(res)
        // success
        var imgSrc = res.tempFilePaths;
        // 控制触发添加图片的最多时隐藏
        that.setData({
          isShow: false,
          imgSrc: imgSrc
        })
      }
    })
  },
  // 图片预览
  previewImage: function(e) {
    var current = e.target.dataset.src
    wx.previewImage({
      current: current,
      urls: imgSrc
    })
  },
  // 删除图片
  deleteImg: function(e) {
    var imgSrc = this.data.imgSrc;
    this.setData({
      isShow: true,
      imgSrc: ''
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

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