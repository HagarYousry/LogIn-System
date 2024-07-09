var userName = localStorage.getItem('userName');
var logoutBtn = document.getElementById('logoutBtn')
var userNameEle = document.getElementById('userNameEle')

userNameEle.innerHTML = userName;

logoutBtn.addEventListener('click', function(){
    localStorage.removeItem('userName'); 
   
})
