import { createEl } from "../utils.js";

export const city = (data) => {
  const city = createEl({ className: "cities__item" });
  const city_img = createEl({
    tag: "img",
    className: "cities__item--img",
    src: data.img,
    alt: data.label,
  });

  const city_text = createEl({
    tag: "p",
    className: "cities__item--text",
    text: data.label,
  });

  city.appendChild(city_img);
  city.appendChild(city_text);

  return city;
};
