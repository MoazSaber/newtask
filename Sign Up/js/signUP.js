let signName = document.getElementById('signName')
let signEmail=document.getElementById('signEmail')
let signPassword=document.getElementById('signPassword')

let signArray=[]
if(localStorage.getItem('accounts')!=null){
    signArray=JSON.parse(localStorage.getItem('accounts'))
}else {
    signArray=[]
}


function add() {
    if(signName.value==""||signEmail.value==""||signPassword.value=="" ){
        document.getElementById('wrong').innerHTML="All inputs are required"
    }
    else{
        let signObject={
            name:signName.value,
            email:signEmail.value,
            password:signPassword.value}
            let vail=false;
            for(let i=0;i<signArray.length;i++){
                if(signEmail.value===signArray[i].email){
                    
                    vail=true;
                break;}}
                if(vail){
                    document.getElementById('wrong').innerHTML="your email exists"
                }
                else if(checkEmail(signEmail.value)=== false || checkPassword(signPassword.value) === false){
                    document.getElementById('wrong').innerHTML="Email must end with @.com and password must be 8 numbers plus 1 letter"
                }
            
                else {
                    signArray.push(signObject)
        localStorage.setItem('accounts',JSON.stringify(signArray))
        location.href="../index.html"
    }
            }
}
function checkEmail(str) {
    let emailVali = /^(.+)@(.+)(\.)(.+)$/
    return emailVali.test(str)
}
function checkPassword(pass) {
    let PassVali=/^[0-9]{8}[a-zA-Z]$/
    return PassVali.test(pass)
}
