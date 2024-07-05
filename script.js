"use strict";

const modals = document.querySelectorAll(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelectorAll(".close-modal");
const btnsOpenModal = document.querySelectorAll(".show-modal");

const openModal = function (index) {
  modals[index].classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal = function () {
  modals.forEach((modal) => {
    modal.classList.add("hidden");
  });
  overlay.classList.add("hidden");
};

btnsOpenModal.forEach((btn, index) => {
  btn.addEventListener("click", function () {
    openModal(index);
  });
});

btnCloseModal.forEach((btn) => {
  btn.addEventListener("click", closeModal);
});

overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    closeModal();
  }
});
