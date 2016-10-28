# Compaus-Recruit-Doc

# 接口说明

### 存储用户报名信息接口:
```javascript
用户报名接口：http://fex.cctvnews.cn/api/campus-recruit-register
请求类型: POST
请求的数据结构：
{
  'openid'       : { type: String, required: true },  // 通过微信登陆获取
  'username'     : { type: String, required: true },  // 这个字段是不是和name重复了？
  'jobIntension' : { type: String, default: '' },
  'name'         : { type: String, default: '' },
  'phone'        : { type: String, default: '' },
  'email'        : { type: String, default: '' },
  'specialty'    : { type: String, default: '' },
  'body'         : { type: String, default: '' },
  'signin'       : { type: Number, default: 0 }
}

服务器返回数据：
成功：
{
  stat: 200,
  msg: 'Store register info successfully!'
}

失败：
{
  stat: 500,
  msg: 'fail msg'
}
```

使用微信登陆后，会有一个相对于当前公众号唯一的 openid ，可根据此来判断用户是否报名和签到。使用微信登陆的话就不需要用户表了

### 获取用户信息接口:
```javascript
用户报名接口：http://fex.cctvnews.cn/api/campus-recruit-register
请求类型: GET
请求的数据结构：
{
  'openid': '123'
}

服务器返回数据：
成功：
{
  stat: 200,
  data: {
    username     : "nokey",
	signin       : 0,
	body         : "ffw",
	specialty    : "com",
	email        : "test@test",
	phone        : "123456",
	name         : "nokey",
	jobIntension : "test"
  }
}

失败：
{
  stat: 400,
  msg: 'This user does not exist!'
}
{
  stat: 500,
  msg: 'fail msg'
}
```

### 用户签到接口:
```javascript
用户报名接口：http://fex.cctvnews.cn/api/campus-recruit-signin
请求类型: POST
请求的数据结构：
{
  'openid': '123'
}

服务器返回数据：
成功：
{
  stat: 200,
  msg: 'User sign in successfully!'
}
{
  stat: 201,
  msg: 'This user already sign in!'
}

失败：
{
  stat: 400,
  msg: 'This user does not exist!'
}
{
  stat: 500,
  msg: 'fail msg'
}
```

> 微信登陆的接口还在等公众号后台的操作，也就是说还法测试，所以没写在这里
> 
> 持续更新中。。。
