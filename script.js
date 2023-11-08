function Login() {
    var done = 0;
    var username = document.login.username.value;
    var password = document.login.password.value;
    if (username == "Mabim" && password =="Mabim"){
            if(confirm("Apakah anda ingin login?") == true){
                window.location.href = "https://github.com/Salviarani/Mabim-Fasilkom"
            } else {
                alert("Login dibatalkan !");
            }
            
    } else{
            if (done == 0) {
                alert("Username/Pasword Salah");
            }
    }
} 