// 06-modules — your work goes in this file, and in one you create yourself.
//
// Read 06-modules/README.md first, then read catalog.js, then run:
//   node 06-modules/example.js
// Check your work with: npm test 06

// This import line is written for you. It is the only reason `products`,
// `formatEGP` and `shopName` exist in this file at all — delete it and none of
// them are defined any more.
import shopName, { products, formatEGP } from "./catalog.js";


export function productCount() {
  return products.length;
}

export function priceTag(product) {
  return formatEGP(product.price);
}

export function shopHeading() {
  return `${shopName} catalog`;
}

