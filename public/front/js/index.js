//区域滚动效果
mui('.mui-scroll-wrapper').scroll({
  indicators:false
});

// 轮播图功能
var gallery = mui('.mui-slider');
gallery.slider({
  interval:1000//自动轮播周期，若为0则不自动播放，默认为0；
});
