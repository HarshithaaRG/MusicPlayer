/*const submit_button=document.querySelector(".button");
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
*/
const em=[];
const pwd=[];
const submit_button=document.querySelector(".button");
submit_button.onclick= () =>{
    var fname =document.getElementById("fname").value;
    var lname =document.getElementById("lname").value;
    var email=document.getElementById("email").value;
    var pass =document.getElementById("pass").value;
    var cpass =document.getElementById("cpass").value;
    if(pass.length<6){
        alert("Password should at least be 6 characters long");
        
    }
    else if(pass!=cpass){
        alert("Password doesn't match");
        
    }
    else if(fname==''||lname=='' || email=='' || pass=='' ||cpass==''){
        alert("Input field cannot be empyty");
        
    }
    else{
        const em=JSON.parse(localStorage.getItem('email')) || [];
        const pwd = JSON.parse(localStorage.getItem('pass'))||[];
        if(em.indexOf(email)==-1){
            em.push(email);
            pwd.push(pass);
            localStorage.setItem('email',JSON.stringify(em));
            localStorage.setItem('pass',JSON.stringify(pwd));
            const userData={};
            userData[email]=pass;
            alert("Registered successfully");
            window.location.href='login.html';
            return false;
            
        }
        else{
            alert('user Id already exists');
            window.location.href='login.html';
            return false;

        }
        localStorage.setItem('email',JSON.stringify(em));
        localStorage.setItem('pass', JSON.stringify(pwd));
        
    }
    

    
}


