const form = document.getElementById("form");
const inputName = document.getElementById("input-name");
const errorMsg = document.getElementById("error-msg");


form.onsubmit = (e) => {
  e.preventDefault();
  errorMsg.style.display = "none";
  if(inputName.value === "" || inputName.value === undefined){
    errorMsg.style.display = "block";
  }
  else{
    localStorage.setItem("Name", inputName.value);
    window.open("index0.html", "_self");
  }
};

function submit() {
  window.location.href="index0.html";
}


