const textBill = document.querySelector("#txt-bill");
const textPeople = document.querySelector("#txt-people");
const tipButtons = document.querySelectorAll(".btn-tip");
const labelTip = document.querySelector(".lbl-tip");
const labelPerson = document.querySelector(".tip-person");
const buttonReset = document.querySelector(".btn-reset");
const textCustom = document.querySelector(".txt-custom")
const buttonCustom = document.querySelector(".custom");
const errorBill = document.querySelector(".error-bill");
const errorPeople = document.querySelector(".error-people");

let totalBill = 0;
let totalPeople = 0;

window.onload = textBill.focus();

tipButtons.forEach((tipButton) => {
  tipButton.addEventListener("click", () => {
    if (textBill.value == "") {
      textBill.focus();
      errorBill.innerHTML = "Can't be zero";
    }else if (textPeople.value == ""){
      textPeople.focus();
      errorPeople.innerHTML = "Can't be zero";
    }else{
      let tipValue = tipButton.value / 100;
      let totalTip = (textBill.value * tipValue);
      let totalTipPerson = (textBill.value * tipValue) / textPeople.value;
      console.log(totalTip);

      usdFormat = Intl.NumberFormat("en-US", {
          style: "currency",
          currency: "USD",
      });
      if(tipButton.value == "custom"){
        textCustom.style.display = "block";
        buttonCustom.style.display = "none";
        textCustom.focus();
      }else{
        labelTip.innerHTML = usdFormat.format(totalTip);
        labelPerson.innerHTML = usdFormat.format(totalTipPerson)
      }
    }
  })
})

buttonReset.addEventListener("click", () => {
  textBill.value = "";
  textPeople.value = "";
  textBill.focus();
  textCustom.style.display = "none";
  buttonCustom.style.display = "block";
})

textBill.addEventListener("keypress", (e) => {
  console.log(e.code);
  if(e.which == 'Tab' || e.code == 'Tab' || e.code == 'Enter') {
    textPeople.focus();
    console.log(e.code);
  }
})

textCustom.addEventListener("blur", () =>{
  textCustom.style.display = "none";
  buttonCustom.style.display = "block";
})

textCustom.addEventListener("keypress", (e) =>{
  let customTip = textCustom.value / 100
  console.log(customTip);
  if(e.code === "Enter"){
    if(customTip > 0) {
      totalBill = textBill.value * customTip;
      totalPeople = (textBill.value * customTip) / textPeople.value
    }
    labelTip.innerHTML = usdFormat.format(totalBill);
    labelPerson.innerHTML = usdFormat.format(totalPeople)
    textCustom.value = "";
    textCustom.style.display = "none";
    buttonCustom.style.display = "block";
  }
})

textBill.addEventListener("blur", () =>{
  if(textBill.value > 0){
    errorBill.innerHTML = ""
  }
})

textPeople.addEventListener("blur", () =>{
  if(textPeople.value > 0){
    errorPeople.innerHTML = ""
  }
})
