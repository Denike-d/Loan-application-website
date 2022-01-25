var modal = document.getElementById("myModal");
let close = document.getElementById("close");

function calculateLoan(amount, rate, months){
  /* Calulate Loan repayment*/ 
  let payment =(amount*rate) + amount / months;
  let repaymentAmount = Math.floor(payment);
  
  /*Adding the repayment amount as a text using innerHTML*/
  let notice = document.getElementById("notice");
  let heading = document.getElementById("heading");

  notice.innerHTML = "If you choose this plan, your monthly payback will be "
  heading.innerHTML = "NGN " + repaymentAmount;

  /*When the user clicks on the apply button, the for will be displayed as a modal */
  modal.style.display = "block";

}

function submitForm(){
  window.location.href = "./submit.html";
  console.log("new window");
}

function closeModal(){
  modal.style.display = "none"
}

