/*const submit_button=document.querySelector(".button");
submit_button.onclick= () =>{

    
    const email=document.getElementById("email").value;
    const pass =document.getElementById("pass").value;       
    localStorage.setItem("Email",email);
    localStorage.setItem("Password",pass);    
    if( email=="" || pass==""){
        alert("Input field has no value");
        
    }
    
    else{
        
            alert('Login successful');
            window.location.href='index.html';
            return false;
        
        
        
    }
}*/
const submit_button=document.querySelector(".button");
submit_button.onclick= () =>{
    var email=document.getElementById("email").value;
    var pass=document.getElementById("pass").value;
    console.log(pass);
    /*const em=localStorage.getItem('email') ? JSON.parse(localStorage.getItem('email')):[]
    console.log(em)
    const pwd=localStorage.getItem('pass')? JSON.parse(localStorage.getItem('pass')):[]
    console.log(pwd)*/
    const em=JSON.parse(localStorage.getItem('email')) || [];
    const pwd = JSON.parse(localStorage.getItem('pass'))||[];
    if(email==null || email==''){
        alert('Email field cannot be empty');
    } 
    else if(pass==null || pass==''){
        alert('password field cannot be empty');
    }
    else if(pass.length<6){
        alert('password should be at least  that 6 characters');
    }
    else if(em.indexOf(email)==-1){
        alert("First time user? Please register yourself");
        window.location.href='index.html';
        return false;
        
    }
    else{
        let ind=em.indexOf(email);
        let password=pwd[ind];
        console.log(pass,password);
        if(pass==password){
            alert("Logged in successfully");
            window.location.href='homepage.html';
            return false;
            

        }else{
            alert("wrong password");
            return false;
            
        }
    }

    
       
    
}
