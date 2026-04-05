const loginBox = document.querySelector(".login-box")

loginBox.addEventListener("mouseover", ()=>{

loginBox.style.transform="scale(1.05)"
loginBox.style.transition="0.3s"

})

loginBox.addEventListener("mouseleave", ()=>{

loginBox.style.transform="scale(1)"

})