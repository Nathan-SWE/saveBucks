import { createElements } from "../utils/createElements.js";

const footerComponent = () => {
  const termsPoliciesPage = "../assets/pages/termsPolicies.html";

  const { footer } = createElements({
    footer: 1,
  });

  const footerPages = footer[0];
  footerPages.innerHTML = `
    <section>
      <h2 class="secondTitle">SaveBucks</h2>
      <div>
        <p><a href=${termsPoliciesPage} target="_blank">Termos de uso</a></p>
        <p><a href=${termsPoliciesPage} target="_blank">Politica de Privacidade.</a></p>
        <p>Desenvolvido por <a href="https://github.com/Nathan-SWE" target="_blank">Nathan Lima.</a></p>
      </div>
    </section>
  `;

  return footerPages;
};

export { footerComponent };
