import { addFooter } from "../../utils/addFooter.js";
import { createElements } from "../../utils/createElements.js";
import { handleForms, privacyPassword } from "../../utils/formsHandler.js";
import { signInForm } from "./signInFormComponent.js";

const loginComponent = () => {
  const body = document.body;

  const { section } = createElements({
    section: 1,
  });

  const loginSection = section[0];
  loginSection.classList.add("login");

  loginSection.innerHTML = `
    <header>
      <h1>SaveBucks</h1>
    </header>
    
    <form action="" class="form">
      <div class="actions" data-js="authActions">
        <button data-js="signInBtn">Login</button>
        <button data-js="signUpBtn">Cadastrar</button>
      </div>
    </form>
`;

  const form = loginSection.querySelector("form");

  form.appendChild(signInForm());
  body.appendChild(loginSection);
  addFooter();

  handleForms(form);
  privacyPassword(form);
};

export { loginComponent };
