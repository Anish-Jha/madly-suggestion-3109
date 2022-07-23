let form = document.querySelector("form");
let signupPage = JSON.parse(localStorage.getItem("signup")) || [];

form.addEventListener("submit", function (e) {
    e.preventDefault();
    if (signupPage.length === 0) {
        alert("No User Found");
        return;
    }

    let obj = {
        email: form.email.value,
        password: form.password.value,
    }

    let Result = false;
    signupPage.forEach(function (ele) {

        if (ele.email === obj.email && ele.password === obj.password) {
            Result = true;

            localStorage.setItem("signin", JSON.stringify(ele));
            alert("Login Successful");
            window.location.href="index.html"
        }
    })
    if(Result === false){
        alert("User Doesn't Exist");
    }
})