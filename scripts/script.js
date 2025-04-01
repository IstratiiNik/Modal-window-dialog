// Modal functionality
const modal = document.getElementById("modal");
const openButton = document.getElementById("open-button");
const closeButton = document.getElementById("close-button");
const confirmBtn = document.getElementById("confirm-btn");
const cancelBtn = document.getElementById("cancel-btn");

// Open modal
openButton.addEventListener("click", () => {
  modal.showModal();
  modal.classList.remove("modal-hidden");
});

// Close modal
closeButton.addEventListener("click", () => {
  modal.returnValue = "";
  modal.close();
  modal.classList.add("modal-hidden");
});

// Confirm button functionality
confirmBtn.addEventListener("click", () => {
  modal.close("confirmed");
  console.log(modal.returnValue);
  modal.classList.add("modal-hidden");
});

// Cancel button functionality
cancelBtn.addEventListener("click", () => {
  modal.close("cancelled");
  console.log(modal.returnValue);
  modal.classList.add("modal-hidden");
});

// Handle modal close event
modal.addEventListener("close", (event) => {
  if (modal.returnValue === "confirmed") {
    alert("Ваши данные успешно приняты!");
  } else if (modal.returnValue === "cancelled") {
    alert("Вы отменили ввод!");
  }
});

// Close modal when clicking outside of the modal content
modal.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.returnValue = "";
    modal.close();
    modal.classList.add("modal-hidden");
  }
});
