import { userInputsComponents } from "./userInputsComponent.js";
import { socialAuthComponent } from "./socialAuthComponent.js";

const signInForm = () => {
  const fragment = document.createDocumentFragment();
  fragment.append(userInputsComponents(), socialAuthComponent());

  return fragment;
};

export { signInForm };
