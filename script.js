import { linksBox } from "./scripts/components/liksBox.js";
import { siteLink } from "./scripts/components/siteLink.js";
import { linksData } from "./scripts/datas/linksData.js";
import { sitesData } from "./scripts/datas/sitesData.js";
import { categoriesData } from "./scripts/datas/categoriesData.js";
import { category } from "./scripts/components/category.js";
import { city } from "./scripts/components/city.js";
import { citiesData } from "./scripts/datas/citiesData.js";
import { card } from "./scripts/components/card.js";

import { eventsStore } from "./scripts/datas/data.js";
import { createEl } from "./scripts/utils.js";

const footerLinks = document.querySelector(".footer__links");
const footerSites = document.querySelector(".footer__sites");
const categoriesRow = document.querySelector(".categories__row");
const citiesRow = document.querySelector(".cities__row");
const offlineEvents = document.querySelector(".offline-events");
const olineEvents = document.querySelector(".online-events");
const eventsFilter = document.querySelector(".events__cards--filter");


const offlineEventsData = eventsStore.filter((data) => data.type === "offline");
const onlineEventsData = eventsStore.filter((data) => data.type === "online");

const typeSelect = document.querySelector(".type");
const distanceSelect = document.querySelector(".distance");
const categorySelect = document.querySelector(".category");
const clearBtn = document.querySelector(".clear");

let typeSelectValue = "";
let distanceSelectValue = "";
let categorySelectValue = "";

typeSelect?.addEventListener("change", function () {
  typeSelectValue = typeSelect?.value;
  filterAndDisplayEvents();
});

distanceSelect?.addEventListener("change", function () {
  distanceSelectValue = distanceSelect?.value;
  filterAndDisplayEvents();
});

categorySelect?.addEventListener("change", function () {
  categorySelectValue = categorySelect?.value;
  filterAndDisplayEvents();
});

clearBtn?.addEventListener("click", function () {
  typeSelectValue = "";
  distanceSelectValue = "";
  categorySelectValue = "";
  typeSelect.selectedIndex = 0;
  distanceSelect.selectedIndex = 0;
  categorySelect.selectedIndex = 0;
  filterAndDisplayEvents();
});

function filterAndDisplayEvents() {
    if(eventsFilter) {
        eventsFilter.innerHTML = "";

        const filteredEvents = eventsStore.filter((item) => {
          return (
            (!typeSelectValue || item.type === typeSelectValue) &&
            (!distanceSelectValue || `${item.distance}` === distanceSelectValue) &&
            (!categorySelectValue || item.category === categorySelectValue)
          );
        });
      
      
      
        filteredEvents.forEach((item) => {
          eventsFilter?.appendChild(card(item));
        });
    }
 

}

function renderAllSelects(arr) {
  const typeFilters = new Set(arr.map((item) => item.type));
  const typeDistance = new Set(
    arr
      .map((item) => item.distance)
      .filter((item) => item)
      .sort((a, b) => a - b)
  );

  const typeCategory = new Set(arr.map((item) => item.category));

  typeFilters.forEach((item) => {
    typeSelect?.appendChild(
      createEl({ tag: "option", value: item, text: item })
    );
  });

  typeDistance.forEach((item) => {
    distanceSelect?.appendChild(
      createEl({ tag: "option", value: item, text: `${item} km` })
    );
  });

  typeCategory.forEach((item) => {
    categorySelect?.appendChild(
      createEl({ tag: "option", value: item, text: `${item} ` })
    );
  });
}

renderAllSelects(eventsStore);

linksData.forEach((item) => {
  footerLinks?.appendChild(linksBox(item));
});
sitesData.forEach((item) => {
  footerSites?.appendChild(siteLink(item));
});

categoriesData.forEach((item) => {
  categoriesRow?.appendChild(category(item));
});

citiesData.forEach((item) => {
  citiesRow?.appendChild(city(item));
});

offlineEventsData.forEach((item) => {
  offlineEvents?.appendChild(card(item));
});
onlineEventsData.forEach((item) => {
  olineEvents?.appendChild(card(item));
});

filterAndDisplayEvents();
