// pages/list/list.js
var time = require("../../utils/util");
Page({
  data: {
    lists: [
      {
        content: "hello",
        time: Date.now(),
        id:1
      }
    ]
  },
  edit(e){
  /** 调用接口可以跳转到下个页面*/
  console.log(e)
  var id = e.currentTarget.dataset.id;
  console.log(id)
    wx:wx.navigateTo({
      url: "../add/add?id="+id
    })
  },
  add() {
    wx: wx.navigateTo({
      url: "../add/add"
    })
  }
})

function initData(page) {
  var arr = wx.getStorageSync('txt');
  console.log(arr)
  if(arr.length){
    arr.forEach((item,i) =>{
      var t = new Date(Number(item.time));
      item.time = time.formatTime(t)
    })
    page.setData({
      lists:arr
    })
  }
}