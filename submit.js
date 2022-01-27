const dataParameter = new URLSearchParams(window.location.search);
const firstName = dataParameter.get("fname");
const lastName = dataParameter.get("lname");
const phoneNumber = dataParameter.get("phoneNumber")


let heading = document.getElementById("heading");
heading.innerHTML = "Full name : " + firstName + " " +  lastName;

let contact = document.getElementById("contact");
contact.innerHTML = "Phone Number : " + phoneNumber 



