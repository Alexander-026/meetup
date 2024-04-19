import { createEl } from "../utils.js"

export const siteLink = (item) => {

    const listItem = createEl({tag:"li"})
    const listItemLink = createEl({tag: "a", href: item.path, title: item.title})
    const listItemIcon = createEl({tag: "img", src: item.iconPath, alt: item.title})

    listItem.appendChild(listItemLink)
    listItemLink.appendChild(listItemIcon)

    return listItem
}