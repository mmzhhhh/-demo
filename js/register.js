//验证手机号
function checktel(tel){
    var reg_tel=/^1[3|4|5|7|8]\d{9}$/;
    var tel_span=document.getElementById('tel_span');
    if(reg_tel.test(tel)){
        tel_span.className="right";
        tel_span.innerHTML='';
        return true;
    }else{
        tel_span.className="wrong";
        tel_span.innerHTML='格式错误';
        return false;
    }
}

// 验证第一次密码
function checkpwd1(pwd1){
    var reg2=/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,16}$/;
    var pwd1_span=document.getElementById('pwd1_span');
    if(reg2.test(pwd1)){
        pwd1_span.className='right';
        pwd1_span.innerHTML='';
        return true;
    }else{
        pwd1_span.className='wrong';
        pwd1_span.innerHTML='请输入6-16位数字和字母的组合';
        return false;
    }
}

//验证第二次密码
function checkpwd2(){
    var pwd1=document.getElementById('pwd1').value;
    var pwd2=document.getElementById('pwd2').value;
    var pw2_span=document.getElementById('pwd2_span');
    if(pwd1==pwd2){
        pw2_span.className='right';
        pw2_span.innerHTML='';
    }else{
        pw2_span.className='wrong';
        pw2_span.innerHTML='两次密码不一致';
    }
}
