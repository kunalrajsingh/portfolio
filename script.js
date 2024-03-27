function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }

  const myElement = document.getElementById("resume");

  

  myElement.addEventListener("click", (event) => {
    event.preventDefault();
    url = event.target
  })