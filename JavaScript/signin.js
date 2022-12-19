let form =document.querySelector("form")
let input= document.querySelector("input[type=email")
let input2= document.querySelector("input[type=password]");
let arr= JSON.parse(localStorage.getItem("login"))  ;
form.addEventListener("submit",(event) =>{
    event.preventDefault();

    let password= document.getElementById("password").value;
    let email= document.getElementById("email").value;

    arr.forEach((el)=>{
         
        if(el.email != email || el.password!= password){
            input.style.border="2px solid red"
            input2.style.border="2px solid red"
            
        }else{
            window.location.href="../html/home.html"
            alert("Successfully Login");
            localStorage.setItem("username",JSON.stringify(el.name))
        }
    })
    
    
   

  
})