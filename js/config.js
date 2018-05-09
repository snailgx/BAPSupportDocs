//配置网站和接口地址
var WapSiteUrl = "http://www.baperp.com/";
var ApiUrl = "http://203.195.192.60:8086/HaoYiDian/";
//var ApiUrl = "http://192.168.1.112:8080/";
var BAPVersion='bap2.0.1';

//配置页面标签卡
var webSiteNameTitle="BAP - ERP产品、行业解决方案、培训、云计算";
$(".webSiteNameTitle").text(webSiteNameTitle);

//app打开协议
var IOSOpenAppUrl = "knowsAnything://";
var IOSOpenAppFailUrl = "http://itunes.apple.com/cn/app/zhi-le-kuai-xue/id1145775466?mt=8";
var AndroidOpenAppUrl = "bap://com.zl.bap/app";
var AndroidOpenAppFailUrl = "http://a.app.qq.com/o/simple.jsp?pkgname=com.example.zhiliaohaoidian";

//app下载路径
var IOSApkUrl = "https://itunes.apple.com/cn/app/zhi-le-kuai-xue/id1145775466?mt=8";
var AndroidApkUrl = "http://a.app.qq.com/o/simple.jsp?pkgname=com.example.zhiliaohaoidian";

//OSS文件访问路径
var OSSFileUrl="http://hydapp.oss-cn-shanghai.aliyuncs.com/";
//OSS图片压缩规则
var imgCompressUrl1="?x-oss-process=image/resize,h_125,limit_0";//支持-视频列表缩略图
var imgCompressUrl2="?x-oss-process=image/resize,h_130,limit_0";//企业认证 我的审核详情
var imgCompressUrl3="?x-oss-process=image/resize,h_61,limit_0";//我的审核
var imgCompressUrl4="";//我的审核