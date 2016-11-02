/**
 * Wechat Web Auth2.0 Login
 * Author @Nokey
 */

function parseUrlParams(){
  var searchArr = window.location.search.slice(1).split('&'),
      params = {};

  $(searchArr).each(function(index, paramStr) {
    var paramArr = paramStr.split('=');

    params[paramArr[0]] = paramArr[1];
  });

  return params;
}

var UrlParams = parseUrlParams(),
	appid = 'wx88888888888888';

if(!!UrlParams.code){
	$.ajax({
		type: "post",
		url: '',
		dataType: "json",
		data: {
			code: UrlParams.code,
		},
		success: function(data){
			console.log(data);
		},
		fail: function(e){}
	});
}else{
	window.location.href = 'https://open.weixin.qq.com/connect/oauth2/authorize?appid='+appid+'&redirect_uri='+location.href.split("#")[0]+'&response_type=code&scope=snsapi_userinfo&state=2016#wechat_redirect';
}


// END
