const submit_button=document.querySelector(".button");
submit_button.onclick= () =>{

    const fname =document.getElementById("fname").value;
    const lname =document.getElementById("lname").value;
    const email=document.getElementById("email").value;
    const pass =document.getElementById("pass").value;
    const cpass =document.getElementById("cpass").value;
    localStorage.setItem("Firstname",fname);
    localStorage.setItem("Lastname",lname);
    localStorage.setItem("Email",email);
    localStorage.setItem("Password",pass);
    localStorage.setItem("CPassword",cpass);
    if(fname== "" || email=="" || pass==""){
        alert("Input field has no value");
        
    }

    else{
        
        if(pass!==cpass){
            alert("Password is not matching");

        }
        else{
            alert('Registration successful');
            window.location.href='homepage.html';
            return false;
        }
        
        
    }
}