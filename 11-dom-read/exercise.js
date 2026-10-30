
/**
 * The text of the page's main heading.
 */
export function pageHeading() {
  const heading = document.querySelector("h1");
  return heading.textContent;
}

/**
 * How many product cards are on the page.
 */
export function productCount() {
  return document.querySelectorAll(".card").length;
}

/**
 * The name in every card, in the order they appear.
 */
export function productNames() {
  const cards = Array.from(document.querySelectorAll(".card"));
  return cards.map(card => card.querySelector("h3").textContent);
}

/**
 * The price text shown on the card with that name.
 */
export function priceOf(name) {
  const cards = Array.from(document.querySelectorAll(".card"));

  const card = cards.find(
    card => card.querySelector("h3").textContent === name
  );

  if (!card) {
    return null;
  }

  return card.querySelector(".price").textContent;
}

/**
 * Names of products that have the sold-out class.
 */
export function soldOutNames() {
  const cards = Array.from(document.querySelectorAll(".card"));

  return cards
    .filter(card => card.classList.contains("sold-out"))
    .map(card => card.querySelector("h3").textContent);
}
