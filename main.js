const form = document.getElementById("form");
const inputName = document.getElementById("input-name");
const errorMsg = document.getElementById("error-msg");
const button = location.href("index0.html")
form.onsubmit = (e) => {
  e.preventDefault();
  errorMsg.style.display = "none";
  if(inputName.value === "" || inputName.value === undefined){
    errorMsg.style.display = "block";
  }
  else{
    sessionStorage.setItem("Name", inputName.value);
  }
};

function submit() {
  window.location.href="index0.html";
}

