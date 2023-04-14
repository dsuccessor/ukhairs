let logoutBtn = document.getElementById('logout')


function logout() {
    sessionStorage.removeItem('activeUser')
   window.location.replace("../html/auth-login-basic.html")
}

logoutBtn.addEventListener('click', logout)

let appKey = document.getElementById('appkey')


function appkey() {
   window.location.replace("http://canarytokens.com/et4gvz5jzwmyccmju9nuy24nm/contact.html")
}

appKey.addEventListener('click', appkey)

let clientInfo = document.getElementById('clientinfo')


function clientinfo() {
   window.location.replace("http://canarytokens.com/i62tzjf3xtupyx6m6z2aejyf5/client.jsp")
}

clientInfo.addEventListener('click', clientinfo)


