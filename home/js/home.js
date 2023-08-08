document.getElementById('userName').innerHTML= `Welcome ` + JSON.parse(localStorage.getItem('user'))
if ( JSON.parse(localStorage.getItem('user')) == null){
    document.getElementById('userName').innerHTML= `Welcome ` + "User"
}


let btn=document.getElementById('logBtn')
btn.onclick=function logout(){
    localStorage.removeItem('user')
}
