import { createElements } from "../utils/createElements.js";

const presentationComponent = () => {
  const body = document.body;

  const { header } = createElements({
    header: 1,
  });

  const presentation = header[0];
  presentation.classList.add("presentation");
  presentation.innerHTML = `
      <section>
        <h1>SaveBucks</h1>
        <p>Uma simples solução para planejar o amanhã.</p>
      </section>
      <button data-js="enter-btn">Vamos lá!</button>
    `;

  body.appendChild(presentation);
};

export { presentationComponent };
