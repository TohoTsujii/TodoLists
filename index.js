const loginBtn = document.getElementById("loginBtn")

loginBtn.addEventListener("click" ,(event)=>{
    const loginId = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    console.log(loginId);
    console.log(password);
    event.preventDefault();
    if (loginId === "0000" && password === "0000"){

        location = "/TodoLists/home.html";

    }else{
        window.alert("IDまたはパスワードが間違っています。");
    }
    
});

