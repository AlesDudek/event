const form = document.querySelector("form");
const fullName = document.querySelector(".fullName");
const fullEmail = document.querySelector(".fullEmail");
const fullPhone = document.querySelector(".fullPhone");

const textEmail = document.querySelector("#text__email");
const textPhone = document.querySelector("#text__phone")

const buyTicket = document.getElementById("buyTicket");
const buyTicket2 = document.getElementById("buyTicket2");

let pattern = /^([a-z\d\.]+)@([a-z\d\-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/



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
  } else{
    notificationName.style.display = "none";
    fullName.style.borderWidth = "1px"
    fullName.style.borderColor = "grey"
    fullName.style.marginTop = "24px"
  }

  if(fullEmail.value === ""){
    notificationEmail.style.display = "block"
    notificationEmail.style.marginTop = "24px"
    fullEmail.style.borderWidth = "6px"
    fullEmail.style.borderStyle = "solid"
    fullEmail.style.borderRadius = "5px"
    fullEmail.style.borderColor = "red"
    fullEmail.style.marginTop = "0"
  }else{
    notificationEmail.style.display = "none"
    fullEmail.style.borderWidth = "1px"
    fullEmail.style.borderColor = "grey"
    fullEmail.style.marginTop = "24px"
  }

  if(fullPhone.value === ""){
    notificationPhone.style.display = "block"
    notificationPhone.style.marginTop = "24px"
    fullPhone.style.borderWidth = "6px"
    fullPhone.style.borderStyle = "solid"
    fullPhone.style.borderRadius = "5px"
    fullPhone.style.borderColor = "red"
    fullPhone.style.marginTop = "0"
  }else{
    notificationPhone.style.display = "none"
    fullPhone.style.borderWidth = "1px"
    fullPhone.style.borderColor = "grey"
    fullPhone.style.marginTop = "24px"
  }
})

fullName.addEventListener("input", function () {
  let nameValue = fullName.value
  if(nameValue !== ""){
    notificationName.style.display = "none"
    fullName.style.borderWidth = "1px"
    fullName.style.borderStyle = "solid"
    fullName.style.borderRadius = "5px"
    fullName.style.borderColor = "grey"
    fullName.style.marginTop = "48px"
  }
})


fullEmail.addEventListener("input", function(){
  let emailValue = fullEmail.value
  if(emailValue !== ""){
    notificationEmail.style.display = "none";
    fullEmail.style.borderWidth = "1px"
    fullEmail.style.borderStyle = "solid"
    fullEmail.style.borderRadius = "5px"
    fullEmail.style.borderColor = "grey"
  }
  if(emailValue.match(pattern)){
    textEmail.textContent = "Your email is correct"
    textEmail.style.color = "green"
    textEmail.style.fontSize = "32px"
    textEmail.style.marginTop = "24px"
    fullEmail.style.marginTop = "0"
    form.classList.add("valid")
    form.classList.remove("invalid")
  }else{
    textEmail.textContent = "Your email is not correct"
    textEmail.style.color = "red"
    textEmail.style.fontSize = "32px"
    textEmail.style.marginTop = "24px"
    fullEmail.style.marginTop = "0"
    form.classList.add("valid")
    form.classList.remove("invalid")
  }
  if(emailValue === ""){
    textEmail.textContent = ""
    form.classList.add("valid")
    form.classList.remove("invalid")
  }
})

fullPhone.addEventListener('input', function(){
  if(!/^\d+$/.test(fullPhone.value)){
    fullPhone.value = fullPhone.value.slice(0,-1);
  }
  let phoneValue = fullPhone.value
  if(phoneValue !== ""){
    notificationPhone.style.display = "none"
    fullPhone.style.borderWidth = "1px"
    fullPhone.style.borderStyle = "solid"
    fullPhone.style.borderRadius = "5px"
    fullPhone.style.borderColor = "grey"
    fullPhone.style.marginTop = "24px"
  }
});

//***focus***/

buyTicket.addEventListener('click', function(event){
  event.preventDefault();
  fullName.focus();
})
buyTicket2.addEventListener('click', function(event){
  event.preventDefault();
  fullName.focus();
})


