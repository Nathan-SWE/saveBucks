import { singUpComponent } from "../components/form/singUpFormComponent.js";
import { signInForm } from "../components/form/signInFormComponent.js";

const handleForms = (form) => {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    e.stopPropagation();
  });

  const authActions = document.querySelector('[data-js="authActions"]');
  authActions.addEventListener("click", (e) => {
    e.preventDefault();

    const loginIputs = document.querySelector('[data-js="login-inputs"]');
    const socialAuth = document.querySelector('[data-js="social-auth"]');
    const registerInputs = document.querySelector(
      '[data-js="register-inputs"]'
    );

    const clickedLoginBtnAndInputsNotExists =
      e.target.matches('[data-js="signInBtn"]') && !loginIputs && !socialAuth;
    const clickedRegisterBtnAndInputsNotExists =
      e.target.matches('[data-js="signUpBtn"]') && !registerInputs;

    if (clickedLoginBtnAndInputsNotExists) {
      form.appendChild(signInForm());
      registerInputs.remove();
    }

    if (clickedRegisterBtnAndInputsNotExists) {
      form.appendChild(singUpComponent());
      loginIputs.remove();
      socialAuth.remove();
    }
  });
};

const privacyPassword = (form) => {
  const eyeShow = "./public/svg/eye-password-show.svg";
  const eyeHide = "./public/svg/eye-password-hide.svg";

  form.addEventListener("click", (e) => {
    const eyeBtn = e.target.closest('[data-js="eyeBtn"]');

    if (eyeBtn) {
      e.preventDefault();
      const eyeImg = eyeBtn.querySelector("img");
      const passwordInput = eyeBtn.previousElementSibling;
      if (eyeImg.src.includes("eye-password-show.svg")) {
        eyeImg.src = eyeHide;
        passwordInput.type = "password";
      } else {
        eyeImg.src = eyeShow;
        passwordInput.type = "text";
      }
    }
  });
};

export { handleForms, privacyPassword };
