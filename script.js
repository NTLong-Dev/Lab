const accounts = [
  {username: "admin",  
    password: "admin"},
    {username: "Long",
    password: "Long"}
]
  
function login() {
    let username = document.querySelector(".login input[type='text']").value;
    let password = document.querySelector(".login input[type='password']").value;
    
    if (username === "" || password === "") {
      alert("Bạn chưa điền thông tin!");
      return;
    }
    
    for (let account of accounts) {
      if (username === account.username && password === account.password) {
        window.location = "home.html";
        return; 
      }
    }
      alert("Sai tài khoản hoặc mật khẩu!");
  }
  
  document.querySelector(".login button").addEventListener("click", login);