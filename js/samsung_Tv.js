var img=document.querySelector('.goods_img>img');
var lis_img=document.querySelectorAll('.goods_img>ul>li>img');
console.log(img);
console.log(lis_img);
lis_img[0].onclick=function (){
    img.src="upload/sanxing1.jpg"
    lis_img[0].className="click_img";
    lis_img[1].className=""
    lis_img[2].className=""
    lis_img[3].className=""
    lis_img[4].className=""
};

lis_img[1].onclick=function (){
    img.src="upload/sanxing2.jpg"
    lis_img[0].className="";
    lis_img[1].className="click_img"
    lis_img[2].className=""
    lis_img[3].className=""
    lis_img[4].className=""
};

lis_img[2].onclick=function (){
    img.src="upload/sanxing3.jpg"
    lis_img[0].className="";
    lis_img[1].className=""
    lis_img[2].className="click_img"
    lis_img[3].className=""
    lis_img[4].className=""
};

lis_img[3].onclick=function (){
    img.src="upload/sanxing4.jpg"
    lis_img[0].className="";
    lis_img[1].className=""
    lis_img[2].className=""
    lis_img[3].className="click_img"
    lis_img[4].className=""
};

lis_img[4].onclick=function (){
    img.src="upload/sanxing1.jpg"
    lis_img[0].className="";
    lis_img[1].className=""
    lis_img[2].className=""
    lis_img[3].className=""
    lis_img[4].className="click_img"
};

var lis=document.querySelectorAll('.choose_right>ul>li');
console.log(lis);

lis[0].onclick=function (){
    lis[0].className="click_img"
    lis[1].className=""
};

lis[1].onclick=function (){
    lis[1].className="click_img"
    lis[0].className=""
};

// 'load' 表示网页中所有资源（包括图像、样式表、脚本等）已经完全加载并且 DOMContentLoaded 事件已经触发。这意味着整个文档已经准备就绪，
// 所有的 DOM 元素都已经可用。
window.addEventListener('load',function (){
    //鼠标悬停效果
    var preview_img=document.querySelector('.preview_img');
    var mask=document.querySelector('.mask');
    var big=document.querySelector('.big');

    //当鼠标悬停在预览图片上时
    preview_img.addEventListener('mouseover',function (){
        // 显示遮罩层和放大部分
        mask.style.display='block';
        big.style.display='block';
    });

    //当鼠标移出预览图片时
    preview_img.addEventListener('mouseout',function (){
        mask.style.display='none';
        big.style.display='none';
    })

    //当鼠标在预览图片上移动时
    preview_img.addEventListener('mousemove',function (e){
        //计算遮罩层的位置
        var x=e.pageX-preview_img.offsetLeft;
        var y=e.pageY-preview_img.offsetTop;
        var maskX=x-mask.offsetWidth/2;
        var maskY=y-mask.offsetHeight/2;

        //限制遮罩层的移动范围在预览图片内部
        if(maskX<0){
            maskX=0;
        }else if(maskX>preview_img.offsetWidth-mask.offsetWidth){
            maskX=preview_img.offsetWidth-mask.offsetWidth;
        }

        if(maskY<0){
            maskY=0;
        }else if(maskY>preview_img.offsetHeight-mask.offsetHeight){
            maskY=preview_img.offsetHeight-mask.offsetHeight;
        }

        //设置遮罩层的位置
        mask.style.left=maskX+'px';
        mask.style.top=maskY+'px';

        // 计算放大部分的位置
        var big_img=document.querySelector('.big_img');
        var maskMax=preview_img.offsetWidth-mask.offsetWidth;
        var bigMax=big_img.offsetWidth-big.offsetWidth;
        var bigX=maskX*bigMax/maskMax;
        var bigY=maskY*bigMax/maskMax;

        // 设置放大部分的位置
        big_img.style.left=-bigX+'px';
        big_img.style.top=-bigY+'px';
    });
});