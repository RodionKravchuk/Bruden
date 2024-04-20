function toggleMenu() {
    var menu = document.getElementById("menuItems");
    var burger = document.querySelector(".burger-menu");
    if (menu.style.left === "0%" || menu.style.left === "") {
        menu.style.left = "-100%";
        burger.classList.remove("hidden"); // Показуємо кнопку бургера, коли меню закрите
    } else {
        menu.style.left = "0%";
        burger.classList.add("hidden"); // Сховаємо кнопку бургера, коли меню відкрите
    }
    document.addEventListener("DOMContentLoaded", function() {
    var menuLinks = document.querySelectorAll(".menu-items a");
    menuLinks.forEach(function(link) {
        link.addEventListener("click", toggleMenu);
    });
});
}
