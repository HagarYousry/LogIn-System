var registerloginForm=document.getElementById('registerloginForm');
var signinEmail=document.getElementById('signinEmail');
var signinPassword=document.getElementById('signinPassword');
var incorrect=document.getElementById('incorrect');



var allUsers=[];
if(localStorage.getItem('allUsers')!=null){
    allUsers=JSON.parse(localStorage.getItem('allUsers'))
}
registerloginForm.addEventListener('submit',function(e){
    e.preventDefault();
    login();
   
});

function login(){
    var userData={
email:signinEmail.value,
password:signinPassword.value
    }
    if(loginValid(userData)==true){
        console.log('you logged in');
        incorrect.classList.replace('d-block','d-none')
        window.location.href="../html/home.html" 

    }
    else{
        console.log('user not found');
        incorrect.classList.replace('d-none','d-block')
    }

    };


function loginValid(userData){
    for (let i = 0; i < allUsers.length; i++) {
        if(allUsers[i].email.toLowerCase() == userData.email.toLowerCase() && allUsers[i].password  == userData.password ){
            localStorage.setItem('userName',allUsers[i].name)
            return true;

        }
    }
}