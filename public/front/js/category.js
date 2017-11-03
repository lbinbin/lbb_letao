//开启左侧的区域滚动
var sc = mui('.mui-scroll-wrapper').scroll({
  deceleration: 0.0005,
    indicators: false
});
//渲染一级分类
$.ajax({
  type: "get",
  url: "/category/queryTopCategory",
  success: function (data) {
    $(".lt_category_l ul").html(template("tpl", data));
    renderSecond(data.rows[0].id);
  }
});
//渲染一级分类相对应的二级分类
function renderSecond(id) {
  $.ajax({
    type: "get",
    url:"/category/querySecondCategory",
    data:{
      id:id
    },
    success:function (data) {
      // console.log(data);
      $(".lt_category_r ul").html(template("tpl2",data))
    }
  })
}
//点击左边的一级分类渲染相对应的二级分类
$(".lt_category_l").on("click","li",function () {
  //点击li就让他添加now 其他的兄弟移除now
  $(this).addClass("now").siblings().removeClass("now");
  var id = $(this).data("id");
  renderSecond(id);
})
