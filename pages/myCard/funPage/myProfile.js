Page({

  /**
   * 页面的初始数据
   */
  data: {
    numCount: 0,
    imgCount: 0,
    videoCount: 0,
    pics: [],
    chooesVideo: [],
    videos: [],
    count: [1, 2, 3, 4, 5, 6, 7, 8, 9],
    isShow: true,
    isShow1: true
  },
  // 监听文章字数
  articlesIndex: function (e) {
    var numCount = e.detail.value.length;
    this.setData({
      numCount
    })
  },
  // 选择图片
  chooseImage: function () {
    var that = this,
      pics = that.data.pics;
    wx.chooseImage({
      count: 9 - pics.length, // 最多可以选择的图片张数，默认9
      sizeType: ['original', 'compressed'], // original 原图，compressed 压缩图，默认二者都有
      sourceType: ['album', 'camera'], // album 从相册选图，camera 使用相机，默认二者都有
      success: function (res) {
        // success
        var imgSrc = res.tempFilePaths;
        pics = pics.concat(imgSrc);
        // 上传图片数量计数
        that.setData({
          imgCount: pics.length
        })
        // 控制触发添加图片的最多时隐藏
        if (pics.length >= 9) {
          that.setData({
            isShow: false
          })
        }
        that.setData({
          pics: pics
        })
      },
    })
  },
  // 图片预览
  previewImage: function (e) {
    var current = e.target.dataset.src
    wx.previewImage({
      current: current,
      urls: this.data.pics
    })
  },
  // 删除图片
  deleteImg: function (e) {
    let upload_picture_list = this.data.pics;
    let index = e.currentTarget.dataset.index;
    let pics = this.data.pics;
    upload_picture_list.splice(index, 1);
    this.setData({
      pics: upload_picture_list
    });
    if(pics.length >= 9) {
      this.setData({
        isShow: false
      })
    } else {
      this.setData({
        isShow: true
      })
    }
  },
  // 选择视频
  chooseVideo: function () {
    var that = this,
      videos = that.data.videos;
    wx.chooseVideo({
      count: 9 - videos.length,
      sizeType: ['original', 'compressed'], //original原图或compressed压缩图
      sourceType: ['album', 'camera'], //从本地相册获取或者拍照
      maxDuration: 10, //限制录制时间
      // camera: 'back', //手机拍照摄像头朝向，后置摄像头 前置：front 这里无效<camera></camera>中使用
      success: res => { //es6写法  success: function(res)
        var videoUrl = res.tempFilePath;
        videos = videos.concat(videoUrl);
        that.setData({
          videos: videos
        });
        // 上传视频数量计数
        that.setData({
          videoCount: videos.length
        })
        // 控制触发添加视频的最多时隐藏
        if (videos.length >= 9) {
          that.setData({
            isShow1: (!that.data.isShow1)
          })
        } else {
          that.setData({
            isShow1: (that.data.isShow1)
          })
        }
      }
    })
  },
  // 预览视频
  previewVideo: function (e) {
    var videoContext = this.videoContext;
    videoContext.seek(0);
    videoContext.play();
    videoContext.requestFullScreen();
  },
  // 删除视频
  deleteVedio: function (e) {
    let upload_picture_list = this.data.videos;
    let index = e.currentTarget.dataset.index;
    let videos = this.data.videos;
    upload_picture_list.splice(index, 1);
    this.setData({
      videos: upload_picture_list
    });
    if (videos.length >= 9) {
      this.setData({
        isShow: false
      })
    } else {
      this.setData({
        isShow: true
      })
    }
  },
  // 视频全屏显示
  bindVideoScreenChange: function (e) {
    var status = e.detail.fullScreen;
    var play = {
      playVideo: false
    }
    if (status) {
      play.playVideo = true;
    } else {
      this.videoContext.pause();
    }
    this.setData(play);
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    isShow: (options.isShow == "true" ? true : false)
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