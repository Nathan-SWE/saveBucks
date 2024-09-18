import { createElements } from "../../utils/createElements.js";

const userInputsComponents = () => {
  const eyeStatus = "../../../public/svg/eye-password-hide.svg";
  const recoveryPage = "/assets/pages/recovery.html";

  const { div } = createElements({
    div: 1,
  });

  const userInputs = div[0];

  userInputs.classList.add("user-inputs");
  userInputs.setAttribute("data-js", "login-inputs");
  userInputs.innerHTML = `
    <label for="signInEmail">E-mail:</label>
    <input
      type="email"
      name="email"
      id="signInEmail"
      placeholder="example@email.com" 
      autocomplete="username" />
    <button data-js="testUser" class="test-user">?</button>

    <label for="signInPassword">Senha:</label>
    <input type="password" name="password" id="signInPassword" autocomplete="current-password" />
    <button class="password-hidden" data-js="eyeBtn">
      <img src=${eyeStatus} alt="hide-password" />
    </button>
    <a href=${recoveryPage} target="_blank">Esqueceu a senha?</a>

    <input class="submit button" type="submit" value="Entrar" />
  `;

  return userInputs;
};

export { userInputsComponents };
