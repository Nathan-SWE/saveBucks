import { singUpComponent } from "../components/singUpFormComponent.js";
import { signInForm } from "../components/signInFormComponent.js";

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

export { handleForms };
