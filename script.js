function login() {
    const id = document.getElementById("loginId").value;
    const pass = document.getElementById("password").value;

    if (id === "student" && pass === "1234") {
        window.location.href = "dashboard.html";
    } else {
        alert("Invalid Login Credentials");
    }
}
