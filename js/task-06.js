const inputValid = document.getElementById('#validation-input');
inputValid.addEventListener("blur", () => {
    if(inputValid.length === Number(inputValid.data-length.length)) {
        input.classList.add('valid');
        input.classList.remove('invalid');
    } else {
        input.classList.add('invalid');
        input.classList.remove('valid');
    }
});

