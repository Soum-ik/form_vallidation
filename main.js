const formEl = document.querySelector(".form");
const nameInputEl = document.querySelector("input[name='name']");
const emailInputEl = document.querySelector("input[name='email']");
const passwordEl = document.querySelector("input[name='password']");
const password2El = document.querySelector("input[name='password2']");
const thanksEl = document.querySelector(".thanks");

let completeValidation = false;
let checkValidation = false;

// total value in one
const inptus = [nameInputEl, emailInputEl, passwordEl, password2El];

// if form is not a fill with value;
const invalidateEl = (elm) => {
  elm.nextElementSibling.classList.remove("show-err");
  elm.classList.add("border-err");
};

// if form is fill with value;
const resultInputEL = (elm) => {
  elm.classList.remove("border-err");
  elm.nextElementSibling.classList.add("show-err");
};

// main function for form
const validateInputs = () => {
  if (!completeValidation) return;
  checkValidation = true;

  inptus.forEach((input) => {
    return resultInputEL(input);
  });

  if (!nameInputEl.value) {
    invalidateEl(nameInputEl);
    checkValidation = false;
  }

  if (!emailInputEl.value) {
    invalidateEl(emailInputEl);
    checkValidation = false;
  }

  if (!passwordEl.value) {
    invalidateEl(passwordEl);
    checkValidation = false;
  }

  if (!password2El.value) {
    invalidateEl(password2El);
    checkValidation = false;
  }

  if (password2El.value != passwordEl.value) {
    invalidateEl(password2El);
    checkValidation = false;
  }
};

// too automatic work off
formEl.addEventListener("submit", (e) => {
  e.preventDefault();
  completeValidation = true;
  validateInputs();
  if (checkValidation) {
    formEl.remove()
    thanksEl.style.display = "block";
  }
});
// it should work for every singel input go and cheak what will happend

inptus.forEach((input) => {
  input.addEventListener("input", ()=>{
    validateInputs()
  });
});
