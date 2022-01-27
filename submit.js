const dataParameter = new URLSearchParams(window.location.search);
const firstName = dataParameter.get("fname");
const lastName = dataParameter.get("lname");
const phoneNumber = dataParameter.get("phoneNumber");
const address = dataParameter.get("address");


let heading = document.getElementById("heading");
heading.innerHTML = "Full name : " + firstName + " " +  lastName;


let farmAddress = document.getElementById("address");
farmAddress.innerHTML = "Address : " + address;

let contact = document.getElementById("contact");
contact.innerHTML = "Phone Number : " + phoneNumber;





