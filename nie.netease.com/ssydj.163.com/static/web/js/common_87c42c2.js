nie.define("common",function(){
	var e=function(){
		var e=nie.require("nie.util.shareV5"),
		t=$("#share_pic").attr("src"),
		i=$("#share_title").html(),
		n=$("#share_desc").html();
		e({fat:"#Mshare",type:2,title:i,img:t,content:n})
	},t=function(){e()};return{init:t}
});