let signName =document.getElementById("signName");
let signEmail =document.getElementById("signEmail");
let signPassword =document.getElementById("signPassword");

let array =[];
if(localStorage.getItem('sign') !== null){
    array = JSON.parse(localStorage.getItem('sign'))
}else{
    array =[];
}

function signUp(){
    if(signName.value == '' || signEmail.value == '' || signPassword.value == ''){
        document.getElementById("Message").innerHTML=`<p class ="text-center text-danger">All inputs is required</p>`
    }else{
        let obj ={
            Name:signName.value,
            Email:signEmail.value,
            password:signPassword
        }
        array.push(obj);
        location.href = `../../Login/index.html`
        localStorage.setItem('sign', JSON.stringify(array))
        
    }
}

