var userName="sjimenez@sdgku.edu";
var pass="123456"

function login(){
    // get the info from the user
    var txtUser=document.getElementById("userName").value;
    var txtPass=document.getElementById("userPass").value;

    if(txtUser==userName){
        document.getElementById('display').innerHTML=`<p> Welcome to the system ${userName}`;
    }else{
        document.getElementById('display').innerHTML=`<p> Error!!! Incorrect username`
    }
}
