const dataParameter = new URLSearchParams(window.location.search);
const firstName = dataParameter.get("fname");

let heading = document.getElementById("heading");
heading.innerHTML = "Hi " + firstName ;


