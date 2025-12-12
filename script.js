function createAccount() {
    let user = document.getElementById("createUser").value;
    let pass = document.getElementById("createPass").value;

    if (user === "" || pass === "") {
        document.getElementById("createMsg").innerHTML = "Please fill all fields!";
        return;
    }

    // store account
    localStorage.setItem("accountUser", user);
    localStorage.setItem("accountPass", pass);

    document.getElementById("createMsg").style.color = "green";
    document.getElementById("createMsg").innerHTML = "Account Created!";
}


function login() {
    let user = document.getElementById("loginUser").value;
    let pass = document.getElementById("loginPass").value;

    let savedUser = localStorage.getItem("accountUser");
    let savedPass = localStorage.getItem("accountPass");

    if (user === savedUser && pass === savedPass) {
        document.getElementById("loginMsg").style.color = "green";
        document.getElementById("loginMsg").innerHTML = "Login Successful!";
    } else {
        document.getElementById("loginMsg").innerHTML = "Incorrect username or password!";
    }
}
