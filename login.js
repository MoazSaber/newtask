
let signArray=[]
if(localStorage.getItem('accounts')!==null){
    signArray=JSON.parse(localStorage.getItem('accounts'))
}
let loginEmail=document.getElementById('signEmail')
let loginPassword=document.getElementById('signPassword');


function login()
{
    if(loginEmail.value==""||loginPassword.value==""){
    document.getElementById('message').innerHTML=" all inputs are required"
}
else{
    checkUser()
}
}
    

function checkUser() {
    
for(let i=0;i<signArray.length;i++){
 if(loginEmail.value==signArray[i].email||loginPassword.value==signArray[i].password)
 {
    localStorage.setItem("user",JSON.stringify(signArray[i].name))
    location.href="home/home.html"
    break;
 }

if(loginEmail.value!==signArray[i].email||loginPassword.value!==signArray[i].password){
    document.getElementById('message').innerHTML=" your email dosen't exist,please make a new account then login"
    }
    }
}
