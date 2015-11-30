## OA接口文档
###一、服务端返回客户端数据结构如下：  
######{"resultCode":257, "message":"Hello World", "messageType":1, "data":null}  
详细说明：    1.resultCode 请求码（反馈码）的意义，数据类型：Integer        成功返回: 0x101;        Token过期: 0x103;        版本需要更新: 0x104;        服务端无法处理: 0x105;  
    2.message 返回的具体消息，数据类型：String  
    3.messageType 返回的消息类型，数据类型：Integer        普通消息类型: 1;        需要使用Toast显示的消息类型: 2;        需要点击确定才会消失的消息类型: 3;  
    4.data 包含本次请求的返回具体数据（使用Json格式）。  
###二、接口详情  
####系统接口  
#####1.登录
接口名：loginWithNameAndPwd  
参数：    

        String userName    // 用户名
        String md5(password)    // 用户密码（使用md5后的）
  
返回：  
  
        data: {
            "userId":"", // 用户Id
            "token":"" // 用户本次登陆的token
        }  
  
####业务接口
#####1.加班申请
接口名：applyForWorklate  
参数：  
  
        String userId // 执行此操作的用户Id
        String token // 用户本次登陆的token
        // 以下三者可以使用加班对象来封装。
        long startTime // 加班开始时间
        long duration // 加班持续时间
        String reason // 加班缘由  
  
返回：  

        data: null  
  
#####2.加班记录  
接口名：