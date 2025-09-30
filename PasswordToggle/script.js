const input = document.getElementById("passwordInput");
const icon = document.getElementById("toggleIcon");

icon.addEventListener("click", () => {
  if(input.type === "password"){
    input.type = "text";
    icon.src = "images/eye-open.png";
  }
  else{
    input.type = "password";
    icon.src = "images/eye-close.png";
  }
});
