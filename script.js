document.addEventListener("DOMContentLoaded", function() {
    const menuItems = document.querySelectorAll(".links > li");

    menuItems.forEach((item) => {
        item.addEventListener("click", function(e) {
            // Prévenir le comportement de lien par défaut
            e.preventDefault();
            
            // Masquer les autres sous-menus
            menuItems.forEach((el) => {
                if (el !== item) {
                    el.classList.remove("active");
                }
            });

            // Bascule l'élément courant
            item.classList.toggle("active");
        });
    });
});
