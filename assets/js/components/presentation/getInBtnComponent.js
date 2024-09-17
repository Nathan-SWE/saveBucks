import { createElements } from "../../utils/createElements.js";
import { handlerTransition } from "../../utils/handlerTransition.js";

const getInBtn = () => {
  const { button } = createElements({
    button: 1,
  });

  const btn = button[0];
  btn.textContent = `Vamos lá!`;

  handlerTransition(btn);
  return btn;
};

export { getInBtn };
