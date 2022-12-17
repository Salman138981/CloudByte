let form =document.querySelector("#main")
let input= document.querySelector("#main input[type=password]")
let input2= document.querySelector("#main input[type=password]+input[type=password]");
let arr= JSON.parse(localStorage.getItem("login")) || [] ;
form.addEventListener("submit",(event) =>{
    event.preventDefault();

    let password= document.getElementById("password").value;
    let Cpass= document.getElementById("confirmP").value;
    
    if(password!==Cpass){
         
        input.style.border="1px solid red";
        input2.style.border="1px solid red"
    }
    else{
         let obj={
        name:form.name.value,
        email:form.email.value,
        password:form.password.value
    }

    arr.push(obj)
    localStorage.setItem("login",JSON.stringify(arr));
    window.location.href="../html/signin.html"; 
    }

  
})