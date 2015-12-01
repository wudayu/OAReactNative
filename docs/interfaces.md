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
#####2.获取员工详情
接口名：getUserById  
参数：
  
		String userId // 用户Id
		String token // 用户本次登陆时的token  
		String employeeId // 被查员工Id
返回：
  
		data: {员工对象}
#####3.获取员工列表
接口名：getUserList  
参数：
  
		String userId // 用户Id
		String token // 用户本次登陆时的token  
返回：
  
		data: [
			{员工对象1},
			{员工对象2},
			...
		]
####业务接口
#####1.加班申请
接口名：applyForWorklate  
参数：  
  
        String userId // 执行此操作的用户Id
        String token // 用户本次登陆的token
        // 以下三者可以结合服务端的Model封装成加班对象。
        long startTime // 加班开始时间
        long duration // 加班持续时间
        String reason // 加班缘由  
返回：  

        data: null  
#####2.加班记录  
接口名：getWorklateList  
参数：  

		String userId
		String token
		String applyId // 申请人Id
		long date // 加班日期
		int offset // 分页的第offset页
		int size // 每页条数  
返回：  
  
		data: [
			{加班对象1},
			{加班对象2},
			...
		]
#####3.编辑加班
接口名：modifyWorklate  
参数：  
  
        String userId // 执行此操作的用户Id
        String token // 用户本次登陆的token
        // 以下四者可以结合服务端的Model封装成加班对象。
        String worklateId // 加班对象Id
        long startTime // 加班开始时间
        long duration // 加班持续时间
        String reason // 加班缘由  
返回：  

        data: null  
#####4.删除加班
接口名：deleteWorklate  
参数：  
  
        String userId // 执行此操作的用户Id
        String token // 用户本次登陆的token
        String worklateId // 加班对象Id  
返回：  

        data: null    
#####5.请假申请
接口名：applyForLeave  
参数：  
  
        String userId // 执行此操作的用户Id
        String token // 用户本次登陆的token
        // 以下三者可以结合服务端的Model封装成加班对象。
        long startTime // 请假开始时间
        long duration // 请假持续时间
        String reason // 请假缘由  
返回：  

        data: null  
#####6.请假记录  
接口名：getLeaveList  
参数：  

		String userId
		String token
		String applyId // 申请人Id
		long date // 请假日期
		int offset // 分页的第offset页
		int size // 每页条数  
返回：  
  
		data: [
			{请假对象1},
			{请假对象2},
			...
		]
#####7.编辑请假
接口名：modifyLeave  
参数：  
  
        String userId // 执行此操作的用户Id
        String token // 用户本次登陆的token
        // 以下四者可以结合服务端的Model封装成加班对象。
        String leaveId // 请假对象Id
        long startTime // 请假开始时间
        long duration // 请假持续时间
        String reason // 请假缘由  
返回：  

        data: null  
#####8.删除请假
接口名：deleteLeave  
参数：  
  
        String userId // 执行此操作的用户Id
        String token // 用户本次登陆的token
        String leaveId // 请假对象Id  
返回：  

        data: null  