if (typeof BAP == "undefined") {
    var BAP = {};
}

//弹框
function lmyAlertByTime(str,time){
	//$("body").append(
	//	'<section class="talk-text-box">' +
	//	'<section class="talk-text-main">' +
	//	str+
	//	'</section>' +
	//	'</section>'
	//);
    //
	//setTimeout(function(){
	//	$(".talk-text-box").remove();
	//},time);

	$(".talk-text-box").remove();
	var radNum=Math.floor(Math.random()*100000000)+'';
	$("body").append(
		'<section class="talk-text-box talk-text-box'+radNum+'">' +
		'<section class="talk-text-main">' +
		str+
		'</section>' +
		'</section>'
	);
	setTimeout(function(){
		$(".talk-text-box"+radNum).remove();
	},time);

}

//cookie操作
function addCookie(name,value,expireHours){//添加cookie 过期时间单位为秒
	var cookieString=name+"="+escape(value)+"; path=/";
	//判断是否设置过期时间
	if(expireHours>0){
		var date=new Date();
		date.setTime(date.getTime()+expireHours*1000);
		cookieString=cookieString+"; expires="+date.toGMTString();
	}
	document.cookie=cookieString;
}
function getCookie(name){//获取cookie
	var arr,reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)");
	if(arr=document.cookie.match(reg))
		return unescape(arr[2]);
	else
		return '';
}
function delCookie(name){//删除cookie
	var exp = new Date();
	exp.setTime(exp.getTime() - 1);
	var cval=getCookie(name);
	if(cval!=null) document.cookie= name + "="+cval+"; path=/;expires="+exp.toGMTString();
}
function clearAllCookie(){//删除所有cookie
	var keys = document.cookie.match(/[^ =;]+(?=\=)/g);
	if(keys) {
		for(var i = keys.length; i--;){
			var exp = new Date();
			exp.setTime(exp.getTime() - 1);
			document.cookie= keys[i] + "="+getCookie(keys[i])+"; path=/;expires="+exp.toGMTString();
		}
	}
}

function contains(arr, str) {
    var i = arr.length;
    while (i--) {
           if (arr[i] === str) {
           return true;
           }
    }
    return false;
}

//验证是否登录
function checkUser(){
	var userId=getcookie("userId");
	if(userId==""){
		window.location.href="login.html";
	}
}

//获取url参数
function request(paras) {
	var url = location.href;
	url = decodeURI(url);
	var paraString = url.substring(url.indexOf("?") + 1, url.length).split("&");
	var paraObj = {};
	for (var i = 0; j = paraString[i]; i++) {
		paraObj[j.substring(0, j.indexOf("=")).toLowerCase()] = j.substring(j.indexOf("=") + 1, j.length);
	}
	var returnValue = paraObj[paras.toLowerCase()];
	if (typeof(returnValue) == "undefined") {
		return "";
	} else {
		return returnValue;
	}
}


//登录验证
var BapLoginTel = getCookie("tel");
var BapLoginPwd = getCookie("password");
var BapLoginResBody = getCookie("BAP_resBody");


function checkBAPLogin(){
	if(BapLoginResBody=="" || BapLoginTel=="" || BapLoginPwd==""){
		window.location.href="login.html";
		return;
	}
}

//获取OSS文件访问路径
function getOSSFile(fileUrl,imgCompressUrl){
	return OSSFileUrl + fileUrl + imgCompressUrl;
}

//截取OSS文件访问路径
function cutOSSFile(fileUrl){
	return fileUrl.split(OSSFileUrl)[1];
}

//通过秒计算视频分钟和秒数
function caculateVideoTime(seconds){
	var secondTimeStr='';
	var minTimeStr='';

	var sec=parseInt(seconds%60);
	if(sec<10){
		secondTimeStr='0'+sec;
	}else{
		secondTimeStr=sec;
	}

	var min=parseInt(seconds/60);
	if(min<=0){
		minTimeStr='00:';
	}else if(min<10){
		minTimeStr='0'+min+':';
	}else{
		minTimeStr=min+':';
	}
	return minTimeStr+secondTimeStr;
}

//获取滚动条当前的位置
function getScrollTop() {
	var scrollTop = 0;
	if (document.documentElement && document.documentElement.scrollTop) {
		scrollTop = document.documentElement.scrollTop;
	}
	else if (document.body) {
		scrollTop = document.body.scrollTop;
	}
	return scrollTop;
}
//获取当前可是范围的高度
function getClientHeight() {
	var clientHeight = 0;
	if (document.body.clientHeight && document.documentElement.clientHeight) {
		clientHeight = Math.min(document.body.clientHeight, document.documentElement.clientHeight);
	}
	else {
		clientHeight = Math.max(document.body.clientHeight, document.documentElement.clientHeight);
	}
	return clientHeight;
}
//获取文档完整的高度
function getScrollHeight() {
	return Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
}