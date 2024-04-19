export const createEl = ({ tag = "div", text = "", className = "", ...attrs }) => {
  const element = document.createElement(tag);
  if (className) element.className = className;
  if (text) element.textContent = text;
  Object.keys(attrs).forEach((key) => {
    element.setAttribute(key, attrs[key]);
  });
  return element;
};


