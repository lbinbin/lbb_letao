mui(".mui-scroll-wrapper").scroll({
  indicators:false
});
//清空功能
//获取缓存中的数据并转换为数组
function getHistory() {
  var search_history = localStorage.getItem("lt_search_history");
// console.log(search_history);
  var arr = JSON.parse(search_history);
// console.log(arr);
  return arr;
}
function render() {
  var arr = getHistory();
  $(".lt_history").html(template("tpl",{arr:arr}))
}
render();
//删除功能
$(".lt_history").on("click",".fa-close",function () {
  var btnArray = ["是","否"];
  mui.confirm("你确定删除这条记录吗","警告",btnArray,function (data) {
    
    if(data.index == 0){
      var arr = getHistory();
      var index = $(this).data("index");
      arr.splice(index, 1);
      localStorage.setItem("lt_search_history", JSON.stringify(arr));
      render();
      mui.toast("操作成功");
    }else {
      mui.toast("操作取消");
    }
  })
});

//添加功能
$(".search_btn").on("click",function () {
  
  var key = $(".search_text").val().trim();
  if (key===""){
    mui.alert("亲，你想买什么呢","温馨提示");
    return;
  }
  var arr = getHistory();
  var index = arr.indexOf(key);
  if (index > -1) {
    
    arr.splice(index, 1);
  }
  
  if (arr.length >= 10) {
    arr.pop();
  }
  
  arr.unshift(key);
  localStorage.setItem("lt_search_history", JSON.stringify(arr));
  
  location.href = "searchList.html?key="+key;
})


  

