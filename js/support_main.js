$(function(){
    BAP.support_main={
        init:function(){
            var self=this;

            //加载首尾公共部分
            self.loadHeadFoot();

            //左边菜单导航切换
            self.changeLeftMenu();

            //咨询反馈框
            self.sakBoxAction();

        },
        loadHeadFoot:function(){
            $("#commonHeader").load('commonHeader.html?v=bap2.0.7');
            $("#commonFooter").load('commonFooter.html?v=bap2.0.7');
        },
        changeLeftMenu:function(){
            $(".support-box .panel-heading").on('click',function(){
                if(!$(this).next().hasClass('in')){
                    $(".support-box .panel-primary").removeClass('on');
                    $(this).parents(".panel-primary").addClass('on');
                }
            });
        },
        sakBoxAction:function(){
            var self=this;

            var yesOrNo=1;
            $(".ask-box .btn-primary").on('click',function(){
                yesOrNo=$(this).attr('answer');
                $(".ask-box").hide();
                $(".feedback-box").show();
            });

            $(".feedback-box .btn-primary").on('click',function(){
                if(!$(this).hasClass("commit-btn")){
                    $(".feedback-box textarea").val('');
                    $(".feedback-box").hide();
                    $(".ask-box").show();
                }
            });

            $(".feedback-box .commit-btn").on('click',function(){
                var contentStr=$(".feedback-box textarea").val();
                if(contentStr==""){
                    lmyAlertByTime('请填写反馈内容！',1500);
                    return;
                }

                $.ajax({
                    url:ApiUrl + 'documents/feedback',
                    type:"post",
                    data:JSON.stringify({
                        title:$("#main").find("h1").eq(0).text(),
                        url:window.location.href,
                        isUseful:parseInt(yesOrNo),
                        content:contentStr
                    }),
                    dataType:"json",
                    beforeSend:function(xhr){
                        xhr.setRequestHeader("Content-type","application/json; charset=utf-8");
                    },
                    success: function (result) {
                        if(result.responseCode==200){

                            console.log(result);

                            lmyAlertByTime('提交成功！',1500);
                            $(".feedback-box").hide();

                        }else if(result.responseCode==500){
                            lmyAlertByTime(result.errorMsg,1500);
                        }
                    },
                    error:function(){
                        lmyAlertByTime('系统开小差啦',1500);
                    }
                });

            });


        }
    };
    BAP.support_main.init();
});
