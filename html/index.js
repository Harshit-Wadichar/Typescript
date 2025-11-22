function getInfo() {
    var nameInput = document.getElementById('username');
    var name = nameInput.value;
    var emailInput = document.getElementById('email');
    var email = emailInput.value;
    var ageInput = document.getElementById('age');
    var age = ageInput.value;
    console.log("Name: " + name + " Email: " + email + " Age: " + age);
}
