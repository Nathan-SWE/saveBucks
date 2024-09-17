import { createElements } from "../../utils/createElements.js";

const testUser = () => {
  const { dialog } = createElements({
    dialog: 1,
  });

  const testUserInfos = dialog[0];
  testUserInfos.classList.add("tester-modal");
  testUserInfos.innerHTML = `
  <p>Para testar sem cadastro:</p>
  <p><strong>username:</strong> littleTiger</p>
  <p><strong>password:</strong> test123</p>
  <button data-js="okButton">OK</button>
  `;

  return testUserInfos;
};

export { testUser };
