let form = document.querySelector("form");
    let signupPage = JSON.parse(localStorage.getItem("signup")) || [];

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        let obj = {
            number: form.number.value,
            email: form.email.value,
            password: form.password.value,
        }
       if(obj.email == "" || obj.number=="" || obj.password==""){
        alert("All Fields are Mandatory")
       }
      
       else{
        signupPage.push(obj);
        localStorage.setItem("signup", JSON.stringify(signupPage));
        alert("sign Up successfull")
        window.location.href="index.html"
    }   
})