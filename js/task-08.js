const loginForm = document.querySelector("form.login-form");

function submitLoginForm(event) {
  const email = loginForm.elements["email"].value;
  const password = loginForm.elements["password"].value;
  event.preventDefault();
  if (email === "" || password === "") {
    alert("All fields must be filled!!");
  } else {
    const credentials = {
      email: `${email}`,
      password: `${password}`,
    };
    console.log(credentials);
    loginForm.reset();
  }
}

loginForm.addEventListener("submit", submitLoginForm);
