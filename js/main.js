// ===== SHOW MENU =====
function showMenu(menuid, toggleid) {
  const menu = document.getElementById(menuid);
  const toggle = document.getElementById(toggleid);

  if (menu && toggle) {
    toggle.onclick = () => {
      menu.classList.toggle("show-menu");
    };
  }
}
showMenu("header-menu", "header-toggle");

// ===== TESTIMONIAL SWIPER =====
let swiper = new Swiper(".testimonial-container", {
  centeredSlides: true,
  slidesPerView: "auto",
  loop: true,
  spaceBetween: 32,
  autoplay: {
    duration: 2000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
