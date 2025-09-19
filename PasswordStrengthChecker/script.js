const pass = document.getElementById("password");
const message = document.getElementById("msg");
const strength = document.getElementById("strength");

pass.addEventListener('input', () => {
  if (pass.value.length > 0) {
    message.style.display = "block";
  } else {
    message.style.display = "none";
  }

  if (pass.value.length < 4) {
    strength.innerHTML = "weak";
    strength.style.color = "red";
    pass.style.borderColor = "red"
  }
  else if (pass.value.length >= 4 && pass.value.length < 8) {
    strength.innerHTML = "medium";
    strength.style.color = "orange";
    pass.style.borderColor = "orange";
  }
  else if (password.value.length > 8) {
    strength.innerHTML = "Strong"
    strength.style.color = "green";
    pass.style.borderColor = "green";
  }
});


