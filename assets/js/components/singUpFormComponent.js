import { createElements } from "../utils/createElements.js";

const singUpComponent = () => {
  const { div } = createElements({
    div: 1,
  });

  const signUpForm = div[0];
  signUpForm.classList.add("user-inputs");
  signUpForm.setAttribute("data-js", "register-inputs");
  signUpForm.innerHTML = `
    <label for="username">Usuário:</label>
    <input type="text" name="usuario" id="username" autocomplete="off" required/>

    <label for="signInEmail">E-mail:</label>
    <input
      type="email"
      name="email"
      id="signInEmail"
      placeholder="example@email.com"
      autocomplete="email"
      required/>

    <label for="signInPassword">Senha:</label>
    <input type="password" name="password" id="signInPassword" autocomplete="new-password" required/>
    <button class="password-hidden--2nd">
      <img src="./public/svg/eye-password-show.svg" alt="hide-password" />
    </button>

    <label for="confirmPassword">Confirmar senha:</label>
    <input type="password" name="password" id="confirmPassword" autocomplete="new-password" required/>
    <button class="password-hidden--3nd">
      <img src="./public/svg/eye-password-show.svg" alt="hide-password" />
    </button>

    <div class="termsPolicies">
      <input type="checkbox" name="checkTerms" id="termsPolicies" />
      <p>Li e estou de acordo com os
        <a href="#">Termos de Uso e Politicas de Privacidade.</a>
      </p>
    </div>
    <input class="submit button" type="submit" value="Cadastrar" />
  `;

  return signUpForm;
};

export { singUpComponent };
