
if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    window.localStorage.setItem("isDarkMode", "true");
  }
  
  window.onload = function() {
    const isDarkMode = window.localStorage.getItem("isDarkMode") === "true";
    
    if (isDarkMode) {
      document.body.style.background = "#000000";
      document.getElementById("text").innerHTML = "Turn on the lights!";
      document.getElementById("text").style.color = "#ffffff"
      document.getElementById("checkbox").checked = false;    
    } else {
      document.body.style.background = "#ffffff";
      document.getElementById("text").innerHTML = "Turn off the lights!";
      document.getElementById("text").style.color = "#000000"
      document.getElementById("checkbox").checked = true;
    }
  }
  
  function toggle() {
    const isDarkMode = window.localStorage.getItem("isDarkMode") === "true";
    
    if (isDarkMode) {
      window.localStorage.setItem("isDarkMode", "false");
      document.body.style.background = "#ffffff";
      document.getElementById("text").innerHTML = "Turn off the lights!";
      document.getElementById("text").style.color = "#000000"
      document.getElementById("checkbox").checked = true;
    } else {
      window.localStorage.setItem("isDarkMode", "true");
      document.body.style.background = "#000000";
      document.getElementById("text").innerHTML = "Turn on the lights!";
      document.getElementById("text").style.color = "#ffffff"
      document.getElementById("checkbox").checked = false;  
    }
  }