const click = document.querySelector('.form-group5');
const text1 = document.querySelector('.text1');
const text2 = document.querySelector('.text2');
const login = document.querySelector('.login');
const loginBtn = document.querySelector('.login-btn');


text1.addEventListener("click", () => {
  login.style.top = "-46px";
})
text2.addEventListener("click", () => {
  login.style.top = "-330px";
})

click.addEventListener("click", () => {
  click.classList.add("remove");
  click.addEventListener("transitionend", () => {
    click.classList.remove("remove");
  });
})
loginBtn.addEventListener("click", () => {
  loginBtn.classList.add("remove");
  loginBtn.addEventListener("transitionend", () => {
    loginBtn.classList.remove("remove");
  });
})