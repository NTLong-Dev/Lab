let xhr = new XMLHttpRequest();
xhr.open("GET", "script.js");

xhr.onload = function() {
  if (xhr.status === 200) { 
    let scriptJS = xhr.responseText;
    eval(scriptJS);
    let username = storedUsername; 
    let password = storedPassword;
    // Sử dụng các biến username và password
  }
}

xhr.send();
var welcomeElement = document.getElementById("welcome");
welcomeElement.innerHTML = "Xin chào " + storedUsername;  