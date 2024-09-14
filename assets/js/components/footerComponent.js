import { createElements } from "../utils/createElements.js";

const footerComponent = () => {
  const { footer } = createElements({
    footer: 1,
  });

  const footerPages = footer[0];
  footerPages.innerHTML = `
    <section>
      <h2>SaveBucks</h2>
      <div>
        <p><a href="#" target="_blank">Termos de uso</a></p>
        <p><a href="#" target="_blank">Politica de Privacidade.</a></p>
        <p>Desenvolvido por <a href="#" target="_blank">Nathan Lima.</a></p>
      </div>
    </section>
  `;

  return footerPages;
};

export { footerComponent };
