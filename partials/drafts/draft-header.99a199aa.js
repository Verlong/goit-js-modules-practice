var themeSwitcher=document.querySelector(".theme-switcher");function toggleTheme(){document.body.classList.toggle("dark-theme")}themeSwitcher.addEventListener("click",toggleTheme);var burgerMenu=document.querySelector(".burger-menu"),menuOverlay=document.querySelector(".menu-overlay"),menu=document.querySelector(".menu");function toggleMenu(){burgerMenu.classList.toggle("open"),menuOverlay.classList.toggle("open"),menu.classList.toggle("open")}burgerMenu.addEventListener("click",toggleMenu),menuOverlay.addEventListener("click",toggleMenu);var homeLink=document.querySelector(".desktop-nav li:first-child a"),shoppingListLink=document.querySelector(".desktop-nav li:last-child a"),mobileHomeLink=document.querySelector(".mobile-nav li:first-child a"),mobileShoppingListLink=document.querySelector(".mobile-nav li:last-child a");function openHomePage(e){e.preventDefault()}function openShoppingListPage(e){e.preventDefault()}homeLink.addEventListener("click",openHomePage),shoppingListLink.addEventListener("click",openShoppingListPage),mobileHomeLink.addEventListener("click",openHomePage),mobileShoppingListLink.addEventListener("click",openShoppingListPage);
//# sourceMappingURL=draft-header.99a199aa.js.map