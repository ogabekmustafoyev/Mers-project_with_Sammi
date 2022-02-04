function loader() {
  // LOADER
  const loader = document.querySelector(".loader");
  setTimeout(function () {
    loader.style.opacity = 0;
    setTimeout(function () {
      loader.classList.add("hide");
    }, 1500);
  }, 2000);
}

export default loader;
