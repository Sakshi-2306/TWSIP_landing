const navLinkEls = document.querySelector(".nav-item").querySelectorAll("a");

navLinkEls.forEach(navLinkEl => {
    navLinkEl.addEventListener('click', function () {
        // Remove the "active" class from all navigation links
        navLinkEls.forEach(navv => navv.classList.remove("active"))

        // Add the "active" class to the clicked navigation link
        this.classList.add("active");
    })
});
