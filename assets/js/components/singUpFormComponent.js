import { createElements } from "../utils/createElements.js";

const singUpComponent = () => {
  const eyeStatus = "../../../public/svg/eye-password-hide.svg";
  const termsPoliciesPage = "../assets/pages/termsPolicies.html";

  const { div } = createElements({
    div: 1,
  });

  const signUpForm = div[0];
  signUpForm.classList.add("user-inputs");
  signUpForm.setAttribute("data-js", "register-inputs");
  signUpForm.innerHTML = `
    <label for="username">Usuário:</label>
    <input type="text" name="usuario" id="username" autocomplete="off" />

    <label for="signInEmail">E-mail:</label>
    <input
      type="email"
      name="email"
      id="signInEmail"
      placeholder="example@email.com"
      autocomplete="email"/>

    <label for="signInPassword">Senha:</label>
    <input type="password" name="password" id="signInPassword" autocomplete="new-password" />
    <button class="password-hidden--2nd" data-js="eyeBtn">
      <img src=${eyeStatus} alt="hide-password" />
    </button>

    <label for="confirmPassword">Confirmar senha:</label>
    <input type="password" name="password" id="confirmPassword" autocomplete="new-password" />
    <button class="password-hidden--3nd" data-js="eyeBtn">
      <img src=${eyeStatus} alt="hide-password" />
    </button>

    <div class="termsPolicies">
      <input type="checkbox" name="checkTerms" id="termsPolicies" />
      <p>Li e estou de acordo com os
        <a href=${termsPoliciesPage} target="_blank">Termos de Uso e Politicas de Privacidade.</a>
      </p>
    </div>
    <input class="submit button" type="submit" value="Cadastrar" />
  `;

  return signUpForm;
};

export { singUpComponent };
