Page({

  /**
   * 页面的初始数据
   */
  data: {
    addImgUrl: '../../images/add_img.png',
    contactBtn: [
      {
        id: 1,
        iconUrl: '../../images/contactBtn1.png',
        text: ''
      },
      {
        id: 2,
        iconUrl: '../../images/contactBtn2.png',
        text: '123456789'
      },
      {
        id: 3,
        iconUrl: '../../images/contactBtn3.png',
        text: '123456789'
      },
      {
        id: 4,
        iconUrl: '../../images/contactBtn4.png',
        text: '123456789@qq.com'

      },
      {
        id: 5,
        iconUrl: '../../images/contactBtn5.png',
        text: ''
      },
    ],
    phone: '15717491243',
    numCount: 0,
    profileList: [
      '../../images/profileList1.png',
      '../../images/profileList2.png',
      '../../images/profileList3.png',
    ],
    codeList: [
      {
        text: '小程序码',
        imgUrl: '../../images/codeList1.png'
      },
      {
        text: '公众号码',
        imgUrl: '../../images/codeList2.png'
      },
    ]
  },
  go: function(e) {
    var id = e.target.id;
    var that = this;
    var phone = that.data.phone;
    console.log(id);
    if(id==1) {
      wx.makePhoneCall({
        phoneNumber: phone,
      })
    }
    else if(id==5) {
      wx.getLocation({
        type: 'gcj02', // 默认为 wgs84 返回 gps 坐标，gcj02 返回可用于 wx.openLocation 的坐标
        success: function (res) {
          // success
          wx.openLocation({
            latitude: res.latitude, // 纬度，范围为-90~90，负数表示南纬
            longitude: res.longitude, // 经度，范围为-180~180，负数表示西经
            scale: 20, // 缩放比例
          });
          console.log(res)
        }
      })
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  }
})