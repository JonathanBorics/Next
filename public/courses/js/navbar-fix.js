document.addEventListener("DOMContentLoaded", function () {
  // Selecting the navbar-toggler button
  const navbarToggler = document.querySelector(".navbar-toggler");
  const navbarCollapse = document.getElementById("navbarSupportedContent");

  if (navbarToggler && navbarCollapse) {
    // Ensuring initial state
    navbarCollapse.style.height = "0px";
    navbarToggler.setAttribute("aria-expanded", "false");

    // Handling click event
    navbarToggler.addEventListener("click", function () {
      // Toggling attributes
      const isExpanded = navbarToggler.getAttribute("aria-expanded") === "true";
      navbarToggler.setAttribute("aria-expanded", !isExpanded);

      // Toggling classes
      if (!isExpanded) {
        navbarCollapse.classList.add("show");
        navbarCollapse.style.height = "auto";
      } else {
        navbarCollapse.classList.remove("show");
        navbarCollapse.style.height = "0px";
      }
    });
  }
});
