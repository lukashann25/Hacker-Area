function login(){

let password=document.getElementById("password").value;

if(password=="1234"){

window.location.href="level2.html";

}else{

document.getElementById("result").innerHTML="Falsches Passwort.";

}

}

function login2(){

let password=document.getElementById("password").value;

if(password=="hacker2026"){

window.location.href="level3.html";

}else{

document.getElementById("result").innerHTML="Falsches Passwort.";

}

}

function login3(){

let password=document.getElementById("password").value;

    if(password=="cssmaster"){
    window.location.href="level4.html";

    }else{

    document.getElementById("result").innerHTML="Falsches Passwort.";

    }

}