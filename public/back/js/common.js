//校验用户是否登录的功能
//路径中，并没有login.html
if(location.href.indexOf("login.html") < 0 ){
  $.ajax({
    type:"get",
    url:"/employee/checkRootLogin",
    success:function (data) {
      if(data.error === 400){
        //说明用户没有登录，跳转到登录页面
        location.href = "login.html";
      }
    }
  });
}


//点击icon_menu图标让左边导航栏移除
$(".icon_menu").on("click",function () {
  //让侧边导航栏慢慢出去
  $(".lt_aside").toggleClass("move");
  //让header_r慢慢变长
  $(".lt_main").toggleClass("move1");
});
//退出功能
$(".icon_logout").on("click",function () {
  $('#logoutModal').modal('show')
});


$(".btn_logout").on("click",function () {
  //发送一个ajax请求，告诉服务器我要退出了，服务器会清空你的session
  $.ajax({
    type:"get",
    url:"/employee/employeeLogout",
    success:function (data) {
      console.log(data);
      if (data.success){
        
        window.location.href = "login.html";
      }
    }
  })
});

//点击分类管理，显示或者隐藏二级分类
$(".child").siblings("a").click(function () {
  $(this).next().toggle();
});


  