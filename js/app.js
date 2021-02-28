function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
function onSubmit() {
    var emailInput = document.getElementById("emailInput");
    var errorText = document.getElementById("errorText");
    var emailAddress = document.getElementById("emailAddress").value;

    if (validateEmail(emailAddress)) {
        emailInput.classList.remove("incorrect");
        errorText.classList.add("invisible");
    } else {
        emailInput.classList.add("incorrect");
        errorText.classList.remove("invisible");
    }
}
