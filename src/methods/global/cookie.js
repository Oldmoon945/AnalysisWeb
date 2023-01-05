// 儲存 cookie
function setCookie(name, value) {
    localStorage.setItem(name, value)
    console.log('設定')
  }
  // 取得 cookie
  function getCookie(name) {
    return localStorage.getItem(name)
    // const value = `; ${document.cookie}`;
    // const parts = value.split(`; ${name}=`);
    // if (parts.length === 2) return parts.pop().split(';').shift();
  }
  // 刪除 cookie
  function delCookie(name){
    localStorage.removeItem(name)
    // var exp = new Date();
    // exp.setTime(exp.getTime() - 1);
    // var cval = getCookie(name);
    // if (cval != null) 
    //   document.cookie = name + "=" + cval + ";expires=" + exp.toGMTString()+";path=/";
  }
  
  export { getCookie, delCookie, setCookie }