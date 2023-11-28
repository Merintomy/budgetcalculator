

function logDet(){
    user=uname.value
    pass=pswd.value

    if(user in localStorage){
        details=JSON.parse(localStorage.getItem(user))//object
        console.log(details);
        if(pass==details.pass){
            alert('Login successful')
            window.location='./home.html'

        }else{
            alert('Invalid password')
        }
    }else{
        alert('Please register')
     }
    
}
 