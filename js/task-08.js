const registerForm = document.querySelector('.login-form');
registerForm.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
    event.preventDefault();
   const form = event.target;
   const {
    elements: { username, password }
  } = event.currentTarget;
  
  if (login === "" || password === "") {
    return console.alert("Please fill in all the fields!");
  }

  console.log(`Login: ${login}, Password: ${password}`);
  form.reset();
}
