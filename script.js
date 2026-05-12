// must added
function updateActiveLink() {
  const currentPath = window.location.pathname;
  const currentHash = window.location.hash;

  document.querySelectorAll(".link-container div").forEach((div) => {
    div.classList.remove("active");
  });

  document.querySelectorAll(".link-container a").forEach((link) => {
    const href = link.getAttribute("href");

    if (href === "/" && currentHash === "") {
      link.parentElement.classList.add("active");
    } else if (href === currentPath + currentHash) {
      link.parentElement.classList.add("active");
    }
  });
}

updateActiveLink();

window.addEventListener("hashchange", updateActiveLink);

document,
  addEventListener("DOMContentLoaded", () => {
    // choose one

    const menuBtn1 = document.getElementById("menu-btn-1");
    const menuContainer = document.getElementById("link-container-1");

    menuBtn1.addEventListener("click", () => {
      menuContainer.classList.toggle("open");
    });
  });
