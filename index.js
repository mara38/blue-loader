$(document).ready(function () {
  window.addEventListener("load", () => {
    const loader = document.querySelector(".loader");
  
    loader.classList.add("hidden");
  
    loader.addEventListener("transitionend", () => {
      document.body.removeChild(loader);
    });
  });  
});
