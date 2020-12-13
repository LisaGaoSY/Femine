//pages/Map/map
const app = getApp()
//ar windowHeight = wx.getSystemInfoSync().windowHeight;
//var windowWidth = wx.getSystemInfoSync().windowWidth;
Page({
    data: {
      // lon and lat
      lat: "",
      lon: "",
      scale: 13,

      //adding markup
      markers:
      [{
        iconPath:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1607787292760&di=93b723b203f767c5a4883eecc603d736&imgtype=0&src=http%3A%2F%2Fku.90sjimg.com%2Felement_origin_min_pic%2F01%2F38%2F56%2F42573c8bc3616b2.jpg",
        id: 0,
        latitude: "36.342",
        longitude: "116",
        width:30,
        height:30,
        callout:{
          //bubble name
          content:'lalala',
          color:'#FF0000',
          fontSize:15,
          borderRadius:10,
          display:'ALWAYS',
          bgColor:"#ffffff"
       },
       lable:{
         color:"#FF0000",
         content:"hello"
       } 
      }],
    },
    onLoad: function () {
      console.log('地图定位！')
      let that = this
      wx.getLocation({
          type: 'gcj02', //返回可以用于wx.openLocation的经纬度
          success:(res)=>{
            console.log(res)
              let latitude = res.latitude; 
              let longitude = res.longitude; 
              this.setData({
                  lon:longitude,
                  lat:latitude,
              })
          }
      });
      /*
      wx.getSystemInfo({
        success: (res) => {
          this.setData({
            controls: [{
              id: 1,
              iconPath: '/images/location.png',
              position: {
                left: 20,
                top: res.windowHeight - 80,
                width: 50,
                height: 50
              },
              clickable: true
            }],
          }),
        },
      });
      */
  },

    onReady: function (e) {
      // 使用 wx.createMapContext 获取 map 上下文 
      this.mapCtx = wx.createMapContext('myMap')
    }
    
})


