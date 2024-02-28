// 当页面加载完成时执行
$(function (){
    //获取关闭按钮和广告元素的引用
    var btn=document.getElementById('close_btn');
    var div=document.querySelector('.guanggao');

    //点击关闭按钮时，隐藏广告
    btn.onclick=function (){
        div.style.display='none';
    }

    //定义一个标志变量，用于控制滚动事件是否执行
    var flag=true;

    //点击电梯导航栏中的项目，实现页面滚动至相应楼层并高亮显示
    $('.dianti li').click(function (){
        //标志为false，避免在滚动过程中执行滚动事件
        flag=false;
        //获取被点击元素的索引
        var index=$(this).index();
        //获取对应楼层的偏移顶部位置
        var floorTop=$('.floor .w').eq(index).offset().top;

        //页面滚动至相应楼层
        $('body,html').stop().animate({
            scrollTop:floorTop
        },function (){
            //滚动条完成后，标志设为true
            flag=true;
        })
        //给被点击元素添加now_dianti类，移除其他兄弟元素的now_dianti类
        $(this).addClass('now_dianti').siblings().remove('now_dianti');
    })

    //获取推荐元素的偏移顶部位置
    var recomTop=$('.recom').offset().top;
    toggleTool();

    //初始时根据滚动位置判断是否显示电梯导航栏
    function toggleTool(){
        if($(document).scrollTop()>=recomTop){
            $('.dianti').fadeIn();
        }else{
            $('.dianti').fadeOut();
        };
    }

    //监听窗口滚动事件
    $(window).scroll(function (){
        //根据滚动位置判断是否显示电梯导航栏
        toggleTool();
        //如果标志为true，则执行滚动事件
        if(flag){
            //获取所有楼层元素
            var floors=$('.floor .w');
            //遍历所有楼层元素
            $(floors).each(function (i,ele){
                //如果页面滚动位置超过了当前楼层的顶部位置，则高亮显示对应的电梯导航项目
                if($(document).scrollTop()>=$(ele).offset().top){
                    $('.dianti li').eq(i).addClass('now_dianti').siblings().removeClass();
                }
            })
        }
    })
})