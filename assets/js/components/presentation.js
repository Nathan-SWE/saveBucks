import { createElements } from "../utils/createElements.js";

const presentationComponent = () => {
  const body = document.body;
  const { section, div, h1, p, button } = createElements();

  section.classList.add("presentation");
  section.appendChild(div);
  section.appendChild(button);
  div.appendChild(h1);
  div.appendChild(p);
  h1.textContent = `SaveBucks`;
  p.textContent = `Uma simples solução para planejar o amanhã.`;

  button.setAttribute("data-js", "enter-btn");
  button.textContent = `Vamos lá!`;
  body.append(section);
};

export { presentationComponent };
