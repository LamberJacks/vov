(function () {
const postsNav = document.querySelector(".posts__nav");

if (postsNav) {
  postsNav.addEventListener("click", (e) => {
    const linkTarget = e.target.closest(".posts__link");
    if (!linkTarget) return;
    e.preventDefault();
    const linkActive = postsNav.querySelector(".posts__link--active");
    if (linkActive) {
      linkActive.classList.remove("posts__link--active");
    }
    linkTarget.classList.add("posts__link--active");
  });
}
})();