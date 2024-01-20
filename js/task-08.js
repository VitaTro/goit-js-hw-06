const formRegister = document.querySelector('.login-form');
formRegister.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
    event.preventDefault();
   const form = event.target;
   const email = form.elements.email.value;
   const password = form.elements.password.value;

  if (email === "" || password === "") {
    return alert("Please fill in all the fields!");
  }

  console.log(`Login: ${email}, Password: ${password}`);
  form.reset();
}

