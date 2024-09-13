import { loginComponent } from "../components/loginComponent.js";

const handlerTransition = (btn) => {
  btn.addEventListener("click", () => {
    const body = document.body;
    const sectionPresentation = document.querySelector(".presentation");

    sectionPresentation.classList.add("slide-out");

    sectionPresentation.addEventListener(
      "animationend",
      () => {
        body.innerHTML = "";
        loginComponent();

        const loginSection = document.querySelector(".login");
        loginSection.classList.add("slide-in");
      },
      { once: true }
    );
  });
};

export { handlerTransition };
