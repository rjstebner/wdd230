function checkPassword() {
    const password = document.getElementById("password");
    const confirm_password = document.getElementById("confirm_password");

    if (password.value !== confirm_password.value) {
        confirm_password.setCustomValidity("Passwords do not match.");
    } else {
        confirm_password.setCustomValidity("");
    }
}

const rangeInput = document.getElementById("rating");
const outputValue = document.getElementById("outputValue");

outputValue.textContent = rangeInput.value;

rangeInput.addEventListener("input", function () {
outputValue.textContent = rangeInput.value;
});