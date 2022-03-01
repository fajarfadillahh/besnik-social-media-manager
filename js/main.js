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
