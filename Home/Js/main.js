document.getElementById('userName').innerHTML =localStorage.getItem('userName');

function logOut(){
localStorage.removeItem('userName');
}