const addEventOnElem = (elems, event, callback) => {
    elems.forEach(elem => elem.addEventListener(event, callback));
  };
  
  const navbar = document.querySelector("[data-navbar]");
  const navTogglers = document.querySelectorAll("[data-nav-toggler]");
  const navLinks = document.querySelectorAll("[data-nav-link]");
  
  const toggleNavbar = () => {
    navbar.classList.toggle("active");
  };
  
  addEventOnElem(navTogglers, "click", toggleNavbar);
  
  const closeNavbar = () => {
    navbar.classList.remove("active");
  };
  
  addEventOnElem(navLinks, "click", closeNavbar);

const product_popup = document.querySelector("[product_popup]")
const popup_open = document.querySelectorAll("[popup_open]")
const popup_close = document.querySelectorAll("[popup_close]")

const togglepopup = () => {
  product_popup.classList.toggle("active");
}

addEventOnElem(popup_open, "click", togglepopup);

const closepopup = () => {
  product_popup.classList.remove("active");
};

addEventOnElem(popup_close, "click", closepopup);