function login(){

    // Variables
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    let result = document.getElementById("result");


    switch(true){

        case (username === "dubai chewy cookie" && password === "is the best"):

            result.innerHTML = "Login Successful!";
            window.location.href = "notebook.html";
            break;

        case (username === "" || password === ""):

            result.innerHTML = "Please complete the fields.";
            break;

        default:

            result.innerHTML = "Invalid username or password.";
    }
    for(let i = 1; i <= 3; i++){
        console.log("Login attempt: " + i);
    }
}