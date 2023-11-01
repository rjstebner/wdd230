function checkPassword() {
    const password = document.getElementById("password");
    const confirm_password = document.getElementById("confirm_password");

    if (password.value !== confirm_password.value) {
        confirm_password.setCustomValidity("Passwords do not match.");
    } else {
        confirm_password.setCustomValidity("");
    }
}