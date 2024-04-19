import { createEl } from "../utils.js";

// Function to create a box containing links with a title
export const linksBox = (data) => {
  // Create a container box element with the specified class name
  const box = createEl({ className: "footer__links--box" });

  // Create a title element with the specified class name and text
  const titleBox = createEl({
    tag: "h6",
    className: "footer__links--title",
    text: data.title,
  });

  // Create a list element with the specified class name
  const list = createEl({ tag: "ul", className: "footer__links--list" });

  // Append the title element to the container box
  box.appendChild(titleBox);

  // Iterate over each link item
  data.links.forEach((item) => {
    // Create a list item element
    const listItem = createEl({ tag: "li", className: "list__item" });

    // Create a link element within the list item, with specified class name, text, and href attribute
    listItem.appendChild(
      createEl({
        tag: "a",
        className: "list__item--link",
        text: item.label,
        href: item.path,
      })
    );

    // Append the list item to the list
    list.appendChild(listItem);
  });

  // Append the list to the container box
  box.appendChild(list);

  // Return the constructed box
  return box;
};
