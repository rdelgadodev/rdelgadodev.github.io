// Hacer aparecer el menu
// Declaramos dos constante que serán nuestro boton, el menu y los span
const btn_menu = document.querySelector(".menu-toggle");
const menu = document.querySelector(".menu");
const btn_span = document.querySelectorAll("span");

// Función para hacer el efecto de convertir el menu hamburguesa en una X de cerrar.
function menu_toggle() {
    // Almacenamos en una variable el valor del data del botón del menu
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

// Constante con los items del menu, para que se cierre el menu cada vez que se haga clic sobre uno
const items = document.querySelectorAll('.menu li')

// La función quitará la clase 'is_visible' para que no se muestre por pantalla y llamará a la función de volver a mostrar el menu hamburguesa
function close_menu(){
      menu.classList.remove("is_visible");
      menu_toggle()
}

// Se recorre cada item para que independientemente de en cual se haga clic, se cierre el menú.
items.forEach(item => {
      item.onclick = close_menu
});
