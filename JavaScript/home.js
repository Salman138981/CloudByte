 alert("Welcome to Home Page")

 let username= JSON.parse(localStorage.getItem("username"))

 let p= document.querySelector("#navbar>div:nth-child(3)>p");
  p.textContent=username;
  