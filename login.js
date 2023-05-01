const submit_button=document.querySelector(".button");
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
}