"use strict";
function calculateAge(birthDate) {
    var today = new Date();
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
}
document.addEventListener('DOMContentLoaded', function () {
    var input = document.getElementById('birthdate');
    var button = document.getElementById('calculate');
    var result = document.getElementById('result');
    button.addEventListener('click', function () {
        if (input.value) {
            var birth = new Date(input.value);
            var age = calculateAge(birth);
            result.textContent = "You are ".concat(age, " years old.");
        }
        else {
            result.textContent = 'Please enter a valid birth date.';
        }
    });
});
