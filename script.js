// // Ejemplo de JavaScript para un scroll suave en la navegación
// document.querySelectorAll('nav ul li a[href^="#"]').forEach(anchor => {
//     anchor.addEventListener('click', function (e) {
//         e.preventDefault();

//         document.querySelector(this.getAttribute('href')).scrollIntoView({
//             behavior: 'smooth'
//         });
//     });
// });

// Hacer aparecer el menu
// Declaramos dos constante que serán nuestro boton, el menu y los span
const btn_menu = document.querySelector(".menu-toggle");
const menu = document.querySelector(".menu");
const btn_span = document.querySelectorAll("span");

function menu_toggle() {
    // Almacenamos 
    const is_open = btn_menu.dataset.menuOpen;
    if (is_open === "false") {
        menu.classList.add("is_visible");
        btn_menu.dataset.menuOpen = "true";
        btn_span[0].style.transform = "rotateZ(45deg) translateY(16px)";
        btn_span[1].style.opacity = "0";
        btn_span[2].style.transform = "rotateZ(-45deg) translateY(-16px)";
  } else {
        menu.classList.remove("is_visible");
        btn_menu.dataset.menuOpen = "false";
        btn_span[0].style.transform = "rotateZ(0deg)";
        btn_span[1].style.opacity = "1";
        btn_span[2].style.transform = "rotateZ(0deg)";
  }
}

btn_menu.onclick = menu_toggle;
