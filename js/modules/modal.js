function openModal(modalSerlector, modalTimer) {
  const modal = document.querySelector(modalSerlector);
  modal.classList.add("show");
  modal.classList.remove("hide");
  document.body.style.overflow = "hidden";
  console.log(modalTimer);
  if (modalTimer) {
    clearInterval(modalTimer);
  }
}

function closeModal(modalSerlector) {
  const modal = document.querySelector(modalSerlector);
  modal.classList.add("hide");
  modal.classList.remove("show");
  document.body.style.overflow = "";
}

function modal(triggerSelector, modalSerlector, modalTimer) {
  // MODAL
  const allModalBtn = document.querySelectorAll(triggerSelector),
    modal = document.querySelector(modalSerlector);

  allModalBtn.forEach((btn) => {
    btn.addEventListener("click", () => openModal(modalSerlector, modalTimer));
  });

  modal.addEventListener("click", (e) => {
    if (e.target === modal || e.target.getAttribute("data-close") === "") {
      closeModal(modalSerlector);
    }
  });

  function showMyModalByScroll() {
    if (
      window.pageYOffset + document.documentElement.clientHeight >=
      document.documentElement.scrollHeight
    ) {
      openModal(modalSerlector, modalTimer);
      window.removeEventListener("scroll", showMyModalByScroll);
    }
  }
  window.addEventListener("scroll", showMyModalByScroll);
}

export default modal;
export { closeModal };
export { openModal };
