document.getElementById('userName').innerHTML= `Welcome ` + JSON.parse(localStorage.getItem('user'))


let btn=document.getElementById('logBtn')
btn.onclick=function logout(){
    localStorage.removeItem('user')
}