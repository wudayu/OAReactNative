exports.loginWithNameAndPwd = function(userName: string, userPwd: string, navigator) {
  var REQUEST_URL = 'http://192.168.21.13:8087/login/loginWithNameAndPwd?account=admin&password=admin';
  fetch(REQUEST_URL)
    .then((response) => response.json())
    .then((responseData) => {
      if (responseData.success) {
        return true;
      } else {
        return false;
      }
    })
    .done();
}