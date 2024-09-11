function validit(){

    var name = document.getElementById("name").value;
    var mail = document.getElementById("email").value;
    var pass = document.getElementById("pass").value;
    var confirm = document.getElementById("confirmpass").value;
    var message = document.getElementById("erorr");

    message.style.color = "#fff";
    message.style.textAlign="center";
    message.style.backgroundColor="red";
    message.style.padding="10px";
    message.style.fontSize="18px";
    message.style.transition="all 1s ease"

    if(name=="" && mail=="" && pass=="" && confirm==""){
     message.innerHTML="please enter data";
     return false ;
    }
    else if(name.length<5 || name.length>15){
        message.innerHTML="please enter between 5-15 characters";
        return false;
    }
    else if(mail.indexOf("@gmail.com")== -1){
        message.innerHTML="your email not contain @gmail.com";
        return false;
    }
    else if(pass.length<8){
        message.innerHTML="password least than 8 charcters";
        return false;
    }
    else if(confirm != pass){
        message.innerHTML="confirm is wrong"
        return false;
    }
    else{
        return true;
    }
}



