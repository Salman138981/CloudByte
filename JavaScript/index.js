 let value= document.querySelector("#value")
 let temp=document.querySelector("#template")
 let perse= document.querySelector("#perspective")
  value.addEventListener("click",()=>{
    let vid= document.querySelector("#high_Ceiling>div:nth-child(2)>video")

    vid.src="https://static.airtable.com/images/homescreen/Homepage_Anim_05_SeeValueFast_FINAL.mp4"
    value.style.color="black"
    temp.style.color="#adadad"
    perse.style.color="#adadad"
}) 

   perse.addEventListener("click",()=>{
    let vid= document.querySelector("#high_Ceiling>div:nth-child(2)>video")

    vid.src="https://static.airtable.com/images/homescreen/Homepage_Anim_05_GainPerspective_FINAL.mp4"
    perse.style.color="black"
    value.style.color="#adadad"
    temp.style.color="#adadad"
})

temp.addEventListener("click",()=>{
    let vid= document.querySelector("#high_Ceiling>div:nth-child(2)  video")

    vid.src="https://static.airtable.com/images/homescreen/Homepage_Anim_05_Templates_FINAL.mp4"
    temp.style.color="black"
    perse.style.color="#adadad"
    value.style.color="#adadad"
})
console.log("hi")

let toolkit= document.querySelector("#toolkit")
let develop= document.querySelector("#develop")
let expert= document.querySelector("#expert")


toolkit.addEventListener("click",()=>{
    document.querySelector("#sync>div:nth-child(1)>img").src="https://static.airtable.com/images/homescreen/homepage-apps-dashboard.jpg"
    toolkit.style.color="black"
    develop.style.color="#adadad"
    expert.style.color="#adadad"
})


develop.addEventListener("click",()=>{
    document.querySelector("#sync img").src="https://static.airtable.com/images/homescreen/homepage-run-code.jpg"
    toolkit.style.color="#adadad"
    develop.style.color="black"
    expert.style.color="#adadad"
})

expert.addEventListener("click",()=>{
    document.querySelector("#sync img").src="https://static.airtable.com/images/homescreen/homepage-getsupport.jpg"
    toolkit.style.color="#adadad"
    develop.style.color="#adadad"
    expert.style.color="black"
})