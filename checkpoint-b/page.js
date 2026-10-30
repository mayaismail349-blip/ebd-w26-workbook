
import { items } from "./items.js";

export function renderItems(list) {
  const listElement = document.querySelector("#list");

  listElement.innerHTML = "";

  list.forEach(item => {
    const li = document.createElement("li");

    li.classList.add("goods-item");
    li.textContent = `${item.name} (${item.category})`;

    listElement.append(li);
  });
}

export function matching() {
  return items.filter(item => item.inStock === true);
}

export function start() {
  renderItems(items);

  const button = document.querySelector("#shortlist");

  button.addEventListener("click", () => {
    renderItems(matching());
  });
}


