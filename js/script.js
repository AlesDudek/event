const form = document.querySelector("form");
const fullName = document.querySelector(".fullName");
const fullEmail = document.querySelector(".fullEmail");
const fullPhone = document.querySelector(".fullPhone");

const notificationName = document.querySelector(".notificationName");
const notificationEmail = document.querySelector(".notificationEmail")
const notificationPhone = document.querySelector(".notificationPhone")


form.addEventListener("submit", function(event){
  event.preventDefault()
  if(fullName.value === ""){
    notificationName.style.display = "block";
    notificationName.style.marginTop = "48px"
    fullName.style.borderWidth = "6px"
    fullName.style.borderStyle = "solid"
    fullName.style.borderRadius = "5px"
    fullName.style.borderColor = "red"
    fullName.style.marginTop = "0"

  }
  if(fullEmail.value === ""){
    notificationEmail.style.display = "block"
    notificationEmail.style.marginTop = "24px"
    fullEmail.style.borderWidth = "6px"
    fullEmail.style.borderStyle = "solid"
    fullEmail.style.borderRadius = "5px"
    fullEmail.style.borderColor = "red"
    fullEmail.style.marginTop = "0"
  }
  if(fullPhone.value === ""){
    notificationPhone.style.display = "block"
    notificationPhone.style.marginTop = "24px"
    fullPhone.style.borderWidth = "6px"
    fullPhone.style.borderStyle = "solid"
    fullPhone.style.borderRadius = "5px"
    fullPhone.style.borderColor = "red"
    fullPhone.style.marginTop = "0"
  }
  
})