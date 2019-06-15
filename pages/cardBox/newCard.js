Page({
  /**
   * 页面的初始数据
   */
  data: {
    checkModal: "请选择模板",
    indicatorDots: false,
    autoplay: false,
    interval: 5000,
    duration: 1000,
    addImgUrl: '../../images/add_img.png',
    modalId: '',
    modal1: true,
    modal2: false,
    modal3: false
  },
  openImg: function () {
    var that = this;
    wx.chooseImage({
      count: 1, // 默认9
      sizeType: ['compressed'], // 可以指定是原图还是压缩图，默认二者都有 目前是压缩图
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
      success: function (res) {
        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
        var imgUrls = res.tempFilePaths;
        var imgUrl = res.tempFilePaths[0];
        that.setData({
          addImgUrl: imgUrl
        })
      }
    });
  },
  changeName: function (e) {
    var name = e.detail.value;
    this.setData({
      name
    })
  },
  changeCompany: function (e) {
    var company = e.detail.value;
    this.setData({
      company
    })
  },
  changePost: function (e) {
    var post = e.detail.value;
    this.setData({
      post
    })
  },
  changePhone: function (e) {
    var phone = e.detail.value;
    this.setData({
      phone
    })
  },
  changeEmail: function (e) {
    var email = e.detail.value;
    this.setData({
      email
    })
  },
  changeAddress: function (e) {
    var address = e.detail.value;
    this.setData({
      address
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (res) {
    
  },
  // 提交数据到本地存储
  submit: function (e) {
    var obj = e.detail.value;
    if (obj.name && obj.post && obj.company && obj.phone) { //判断表单是否有数据
      wx.setStorage({
        key: 'name',
        data: obj.name,
      })
      wx.setStorage({
        key: 'post',
        data: obj.post,
      })
      wx.setStorage({
        key: 'company',
        data: obj.company,
      })
      wx.setStorage({
        key: 'phone',
        data: obj.phone,
      })
      wx.setStorage({
        key: 'address',
        data: obj.address,
      })
      wx.setStorage({
        key: 'email',
        data: obj.email,
      })
      // 提交后跳转到cardBox页面
      wx.switchTab({
        url: 'cardBox',
        success: function (e) {
          var page = getCurrentPages().pop();
          wx.showToast({
            title: '创建电子名片成功',
            icon: 'none',
            duration: 2000
          });
          page.onLoad(); //跳转页面后，将页面进行刷新
        }
      })
    } else {
      wx.showToast({
        title: '请输入必填信息',
        icon: 'none',
        duration: 2000,
      })
    }
  },
  modalSelected: function (res) {
    var that = this;
    var id = res.target.id;
    that.setData({
      modalId: id
    })
    if (id == 'modal1') {
      that.setData({
        modal1: true,
        modal2: false,
        modal3: false
      });
    } else if (id == 'modal2') {
      that.setData({
        modal1: false,
        modal2: true,
        modal3: false
      })
    } else {
      that.setData({
        modal1: false,
        modal2: false,
        modal3: true
      })
    }
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