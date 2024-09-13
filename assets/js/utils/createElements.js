const createElements = (...elementNames) => {
  const createdElements = {};

  elementNames.forEach((elementName) => {
    createdElements[elementName] = document.createElement(elementName);
  });

  return createdElements;
};

export { createElements };
