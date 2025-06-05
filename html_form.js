function getFormInput() {
    var message = "Welcome to the page ";
    message = message + input_name.value;
    welcomeMessage.innerHTML = message;
}



function getSelectInput() {
    var message = "Welcome to the page ";
    message = message + input_name.value;
    message = message + ". You chose " + cars.value
    welcomeMessage.innerHTML = message;

    cars.innerHTML += '<option value="BYD">BYD</option>'
}

listOfFruit = ['strawberries', 'kiwifruit', 'fejoas', 'kiwana'];
function buildDropdown() {
    for (i = 0; i < listOfFruit.length; i++) {
        var newOption = '<option value="' + listOfFruit[i] + '">' + listOfFruit[i] + '</option>';
        fruitSelect.innerHTML += newOption;
    }
}

buildDropdown();