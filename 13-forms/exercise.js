export function readForm() {
  const name = document.querySelector("#name").value.trim();
  const price = Number(document.querySelector("#price").value);

  return { name, price };
}

export function clearForm() {
  document.querySelector("#name").value = "";
  document.querySelector("#price").value = "";
}

export function renderList(items) {
  const list = document.querySelector("#list");

  // Remove the old cards first
  list.innerHTML = "";

  items.forEach(item => {
    const card = document.createElement("li");
    card.classList.add("card");

    const heading = document.createElement("h3");
    heading.textContent = item.name;

    const priceParagraph = document.createElement("p");
    priceParagraph.classList.add("price");
    priceParagraph.textContent = `${item.price} EGP`;

    card.append(heading, priceParagraph);
    list.append(card);
  });
}

export function wireForm() {
  const form = document.querySelector("#product-form");
  const error = document.querySelector("#error");

  const items = [];

  form.addEventListener("submit", event => {
    event.preventDefault();

    const product = readForm();

    if (!product.name) {
      error.textContent = "Give the product a name.";
      return;
    }

    if (!product.price || product.price <= 0 || !Number.isFinite(product.price)) {
      error.textContent = "Give the product a price.";
      return;
    }

    error.textContent = "";
    items.push(product);
    renderList(items);
    clearForm();
  });
}