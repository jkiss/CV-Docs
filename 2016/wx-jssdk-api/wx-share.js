/**
 * Wechat Share Data Config
 * Author @Nokey
 */

var shareData = {
	title: '西子美人萦',
	desc: 'Heaven on Earth',
	img_url: 'http://example.com/thumbnail.jpg',
	site_link: 'http://example.com/index.html',
	success: null,
	cancel: null
};

function successShare(type){
	//分享成功 type: timeline / message
	shareData.success && shareData.success(type);
	console.log("Share success!");
}
function cancelShare(type){
	//取消分享 type: timeline / message
	shareData.cancel && shareData.cancel();
	console.log("Share cancel...");
}
function setShareData(){
	//朋友圈
	wx.onMenuShareTimeline({
		title: shareData.title,
		link: shareData.site_link,
		imgUrl: shareData.img_url,
		success: function (){ 
		 	successShare("timeline");
		},
		cancel: function (){
			cancelShare("timeline");
		}
	});
	//好友、群
	wx.onMenuShareAppMessage({
		title: shareData.title,
		desc: shareData.desc,
		link: shareData.site_link, 
		imgUrl: shareData.img_url,
		type: '', // 分享类型,music、video或link，不填默认为link
		dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
		success: function (){ 
		 	successShare("message");
		},
		cancel: function (){
			cancelShare("message");
		}
	});
}

wx.ready(function(){
	setShareData();
});


$.ajax({
	type: "post",
	url: 'http://fex.cctvnews.cn/api/wx-jssdk-auth',
	dataType: "json",
	data: {
		url: location.href.split("#")[0],
	},
	async: false,
	cache: false,
	success: function(data){
		wx.config({
			debug: false,
			appId: data.appId, // 必填，公众号的唯一标识
			timestamp: data.timestamp, // 必填，生成签名的时间戳
			nonceStr: data.nonceStr, // 必填，生成签名的随机串
			signature: data.signature,// 必填，签名，见附录1
			jsApiList: ["onMenuShareTimeline","onMenuShareAppMessage","onMenuShareQQ","onMenuShareWeibo"] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
		});
	},
	fail: function(e){}
});
