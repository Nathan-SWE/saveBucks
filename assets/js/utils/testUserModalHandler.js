import { testUser } from "../components/form/testUserBtn.js";

const modalOpen = (form) => {
  form.addEventListener("click", (e) => {
    if (e.target.dataset.js === "testUser") {
      const modal = testUser();
      form.append(modal);
      modal.showModal();

      modalClose(modal);
    }
  });
};

const modalClose = (modal) => {
  const okButton = modal.querySelector('[data-js="okButton"]');
  okButton.addEventListener("click", () => {
    modal.remove();
  });
};

export { modalOpen };
