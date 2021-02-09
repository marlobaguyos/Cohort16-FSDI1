var userName = "marlo.baguyos@outlook.com";
var password = "password123";

function login(){
    //get the info from the user
    var txtUser=document.getElementById("userName").value;
    var txtPass=document.getElementById("userPass").value;

    if(txtUser==userName){
        document.getElementById('display').innerHTML=`<p>Welcome to the system ${userName}</p>`;
    }else{
        document.getElementById('display').innerHTML=`<p>Error!!! Incorrect username</p>`;
    }

}