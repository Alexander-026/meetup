import { createEl } from "../utils.js";

export const category = (data) => {
  const category_item = createEl({ className: "categories__item" });
  const category_img = createEl({
    tag: "img",
    className: "categories__item--img",
    src: data.img,
    alt: data.label,
  });

  const category_text = createEl({
    tag: "p",
    text: data.label,
    className: "categories__item--text",
  });

  category_item.appendChild(category_img);
  category_item.appendChild(category_text);

  return category_item;
};
