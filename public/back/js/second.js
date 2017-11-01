$(function () {
  var currentPage = 1;
  var pageSize = 5;
  //渲染数据与分页
  function render() {
    $.ajax({
      type: "get",
      url: "/category/querySecondCategoryPaging",
      data: {
        page: currentPage,
        pageSize: pageSize
      },
      success: function (data) {
   
        $("tbody").html(template("tpl", data));
        
        $("#paginator").bootstrapPaginator({
          bootstrapMajorVersion: 3,
          currentPage: currentPage,
          totalPages: Math.ceil(data.total / pageSize),
          size: "small",
          onPageClicked: function (a, b, c, page) {
            currentPage = page;
            render();
          }
        });
      }
    })
  }
  
  render();
  
  //显示模态框
  $(".btn_add").on("click", function () {
    $("#addModal").modal("show");
    
    //发送ajax请求，获取一级分类，渲染下拉框
    $.ajax({
      type: "get",
      url: "/category/queryTopCategoryPaging",
      data: {
        page: 1,
        pageSize: 100
      },
      success: function (data) {
        console.log(data);
        $(".dropdown-menu").html(template("tpl2", data))
      }
    })
  });
  
  //点击下拉框就是点击ul，让某个选中
  $(".dropdown-menu").on("click","a",function () {
    //获取到当前a标签的内容，设置给dropdown-text
    $(".dropdown-text").text($(this).text());
  })
});