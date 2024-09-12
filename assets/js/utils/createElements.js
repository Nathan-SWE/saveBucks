const createElements = () => {
  const section = document.createElement("section");
  const div = document.createElement("div");
  const h1 = document.createElement("h1");
  const p = document.createElement("p");
  const button = document.createElement("button");

  return { section, div, h1, p, button };
};

export { createElements };
