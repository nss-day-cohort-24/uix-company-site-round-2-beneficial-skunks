console.log("javascript loaded")

let contactUsButton = document.getElementById("contact_us_link")
let formContainer = document.getElementById("contact-us-form")


let buttonClicked = function(event){
    event.preventDefault()
    formContainer.style.display = "flex"
    formContainer.classList.add('slide-up-animation')
}
contactUsButton.addEventListener("click",buttonClicked)







