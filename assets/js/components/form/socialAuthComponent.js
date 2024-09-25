import { createElements } from "../../utils/createElements.js";

const socialAuthComponent = () => {
  const googleIcon = "./public/svg/google-original.svg";
  const fbIcon = "./public/svg/facebook-original.svg";
  const githubIcon = "./public/svg/github-original.svg";

  const { fieldset } = createElements({
    fieldset: 1,
  });

  const socialAuth = fieldset[0];

  socialAuth.classList.add("social-auth");
  socialAuth.setAttribute("data-js", "social-auth");
  socialAuth.innerHTML = `    
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
  `;

  return socialAuth;
};

export { socialAuthComponent };
