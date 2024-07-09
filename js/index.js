var signUpForm= document.getElementById('registerForm');
var signupName=document.getElementById('signupName');
var nameAlert=document.getElementById('nameAlert');
var signupEmail=document.getElementById('signupEmail');
var emailAlert=document.getElementById('emailAlert');
var signupPassword=document.getElementById('signupPassword');
var passwordAlert=document.getElementById('passwordAlert');
var existAlert=document.getElementById('existAlert');
var successAlert=document.getElementById('successAlert');
var allUsers=[];
if(localStorage.getItem('allUsers')!=null){
    allUsers=JSON.parse(localStorage.getItem('allUsers'))
}
signUpForm.addEventListener('submit',function(e){
    e.preventDefault();
    if(checkValidateInputes()){
        addUser();
    }
   
});
function validateInputs(Regex,Element,AlertEl){
    var pattern =Regex;
    if(pattern.test(Element.value)){
       /*  console.log('valid') */
        AlertEl.classList.replace('d-block','d-none');
        return true;
    }
    else{
       /*  console.log('Invalid') */
        AlertEl.classList.replace('d-none','d-block');
        return false;
    }
}
function checkValidateInputes() {
    if (validateInputs(/^[a-zA-Z0-9$_]{2,}$/, signupName, nameAlert) == true &&
        validateInputs(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, signupEmail, emailAlert) == true &&
        validateInputs(/^(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9]).{8,}$/, signupPassword, passwordAlert) == true) {
         /* console.log('all inputs are valid'); */
        return true;
    } else {
        /*  console.log('sth invalid'); */
        return false;
    }
}
function addUser(){
    var userInputs={
name:signupName.value,
email:signupEmail.value,
password:signupPassword.value
    };
    if(AlreadyExist(userInputs)==true){
        console.log('Already Exist');
        existAlert.classList.replace('d-none','d-block');
        successAlert.classList.replace('d-block','d-none');
    }
    else{
        allUsers.push(userInputs);
        console.log(allUsers);
        localStorage.setItem('allUsers', JSON.stringify(allUsers))
        successAlert.classList.replace('d-none','d-block');
        existAlert.classList.replace('d-block','d-none');
       /*  window.location.href="../html/login.html" */
    }
   
}
function AlreadyExist(userInputs){
for (let i = 0; i < allUsers.length; i++) {
   if(allUsers[i].email.toLowerCase()== userInputs.email.toLowerCase()){
    return true;
   }
}
}