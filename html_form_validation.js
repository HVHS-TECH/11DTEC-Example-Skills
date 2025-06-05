function getFormInput() {
    console.log("test")
    aaa=document.getElementById("input_name")
    console.log(aaa.value)
    var message = "Welcome to the page ";
    message = message + aaa.value;
    welcomeMessage.innerHTML = message;
}

