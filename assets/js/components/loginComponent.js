import { createElements } from "../utils/createElements.js";

const loginComponent = () => {
  const body = document.body;
  const fragment = document.createDocumentFragment();

  const eyeStatus = "../../../public/svg/eye-password-hide.svg";
  const googleIcon = "../../../public/svg/google-original.svg";
  const fbIcon = "../../../public/svg/facebook-original.svg";
  const githubIcon = "../../../public/svg/github-original.svg";

  const { section } = createElements({
    section: 1,
  });

  const loginSection = section[0];
  loginSection.classList.add("login")

  loginSection.innerHTML = `
      <header>
        <h1>SaveBucks</h1>
      </header>

      <form action="" class="form">
        <div class="actions">
          <button>login</button>
          <button>Cadastrar</button>
        </div>

        <div class="user-inputs">
          <label for="signInEmail">E-mail:</label>
          <input
            type="email"
            name="email"
            id="signInEmail"
            placeholder="example@email.com"
          />
          <button class="test-user">?</button>

          <label for="signInPassword">Senha:</label>
          <input type="password" name="password" id="signInPassword" />
          <button class="password-hidden">
            <img
              src=${eyeStatus}
              alt="hide-password"
            />
          </button>
          <a href="#">Esqueceu a senha?</a>

          <input class="submit button" type="submit" value="Entrar" />
        </div>

        <fieldset class="social-auth">
          <p>ou</p>
          <div>
            <span class="button">
              <img src=${googleIcon} alt="google-logo" />
            </span>
            <span class="button">
              <img src=${fbIcon} alt="facebook-logo" />
            </span>
            <span class="button">
              <img src=${githubIcon} alt="github-logo" />
            </span>
          </div>
        </fieldset>
      </form>
`;

  fragment.appendChild(loginSection);
  body.appendChild(fragment);
};

export { loginComponent };
