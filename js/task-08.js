const form = document.querySelector(".login-form");
const email = document.querySelector('[name="email"]');
const password = document.querySelector('[name="password"]');
const submit = document.querySelector('button[type="submit"]');

class User {
  constructor(email, password) {
    this.password = password;
    this.email = email;
  }
}
function showUserObject(email, password) {
  const userObject = new User(email, password);
  console.log(userObject)
};



function handleSubmit(event) {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    return alert("Please fill in all the fields!");
  };
  showUserObject(email.value, password.value);
  event.currentTarget.reset();
}
form.addEventListener("submit", handleSubmit);