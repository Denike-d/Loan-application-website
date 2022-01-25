const dataParameter = new URLSearchParams(window.location.search);
const data = dataParameter.get("fname");


let heading = document.getElementById("heading");
heading.innerHTML = data + "Your application have been received";

/*for (const data of dataParameter) {
    let firstName = data.fname
    let lastName = data.lname
    let fullName = firstName + lastName;
    console.log(fullName)
}*/


/*let heading = document.getElementById("heading");
heading.innerHTML = "Thank You " + fullName;*/

