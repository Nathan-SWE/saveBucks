import { createElements } from "../utils/createElements.js";
import { getInBtn } from "./getInBtnComponent.js";

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
    `;
  presentation.appendChild(getInBtn());

  body.appendChild(presentation);
};

export { presentationComponent };
