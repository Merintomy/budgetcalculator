
function regDet(){
    let person={
        user:uname.value,
        mail:email.value,
        pass:pswd.value
    }
    if(person.user==''||person.mail==''||person.pass==''){
        alert('please enter details')
        window.location='./index.html'
    }else{
        if(person.mail in localStorage){
            alert('User already registered')
            window.location='./login.html'
        }else{
           console.log(localStorage.setItem(person.user,JSON.stringify(person))); 
            alert('Registered successfully')
            window.location='./login.html'
        }
    }
    
    
    }






