const emailForm = document.querySelector("#emailForm");
const emailInput = document.querySelector("#emailForm input");

/* function checkEmail(email) {
  if (email.indexOf("@") < 0) {
    alert("이메일이 틀렸습니다.");
  } else {
    alert("이메일이 맞습니다.");
  }
}

form.addEventListener("submit", checkEmail);
 */

function onCheckEmail(email) {
  email.preventDefault();
  const writeEmail = emailInput.value;
  if (email.indexOf("@") < 0) {
    alert("이메일을 다시 작성해 주십시오");
  }
}

emailForm.addEventListener("submit", onCheckEmail);
