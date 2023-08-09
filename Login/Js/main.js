let array =[];
array = JSON.parse(localStorage.getItem('sign'));


let signEmail =document.getElementById('signEmail');
let signPassword = document.getElementById('signPassword');



function login(){
    if(signEmail.value == '' || signPassword.value == ''){
        document.getElementById("Message").innerHTML=`<p class ="text-center text-danger">All inputs is required</p>`
    }else{
        check()
    }
}

function check(){
    for(let i = 0 ; i < array.length; i++){
        if(signEmail.value == array[i].Email || signPassword.value == array[i].password){
            let x = array[i].Name;
            localStorage.setItem('userName', x);
            location.href =`../../Home/index.html`;
        }
    }
}