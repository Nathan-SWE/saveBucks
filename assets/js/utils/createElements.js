const createElements = (elements) => {
  const createdElements = {};

  Object.keys(elements).forEach((elementName) => {
    createdElements[elementName] = [];
    for (let i = 0; i < elements[elementName]; i++) {
      createdElements[elementName].push(document.createElement(elementName));
    }
  });

  return createdElements;
};

export { createElements };
