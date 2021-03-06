/**
 * Define Global Variables
 *
 */

let navlist = document.getElementById("navbar__list");
let sections = document.getElementsByTagName("section");

/**
 * End Global Variables
 * Start Helper Functions
 *
 */
// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
/**
 * End Helper Functions
 * Begin Main Functions
 *
 */

// build the nav

for (let section of sections) {
  let listelement = document.createElement("a");
  listelement.innerText = section.getAttribute("data-nav");
  listelement.setAttribute("href", "#" + section.id);
  navlist.appendChild(listelement);

  // Scroll to section on link click
  navlist
    .querySelector('[href="#' + section.id + '"]')
    .addEventListener("click", function (event) {
      event.preventDefault();
      section.scrollIntoView({ behavior: "smooth" });
    });
}

// Add class 'active' to section when near top of viewport

document.addEventListener("scroll", () => {
  let scrollPosion = window.scrollY;

  for (let section of sections) {
    let navitem = navlist.querySelector('[href="#' + section.id + '"]');
    let offset = 100;
    if (
      section.offsetTop - offset <= scrollPosion &&
      section.offsetTop + section.offsetHeight - offset > scrollPosion
    ) {
      section.classList.add("active");
      navitem.classList.add("active");
    } else {
      section.classList.remove("active");
      navitem.classList.remove("active");
    }
  }
});

/**
 * End Main Functions
 * Begin Events
 *
 */

// hide navbar

let navigationbar = document.getElementsByClassName("navbar__menu")[0];
(function () {
  let timer;
  document.addEventListener("scroll", function () {
    clearTimeout(timer);
    timer = setTimeout(hidebar, 2500);

    navigationbar.style.display = "block";
  });

  let hidebar = function () {
    // do stuff
    navigationbar.style.display = "none";
  };
})();

mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 500 ||
    document.documentElement.scrollTop > 500
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
