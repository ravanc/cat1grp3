import Products from "../constants/products";

export function searchProduct(query) {
  const results = Products.filter((product) =>
    product.productName.toLowerCase().includes(query.toLowerCase())
  );
  results.sort((itemA, itemB) => itemB.ecoRating - itemA.ecoRating);
  return results;
}

export function searchByCategory(category) {
  const results = Products.filter((product) => product.category == category);
  results.sort((itemA, itemB) => itemB.ecoRating - itemA.ecoRating);
  return results;
}

export function searchByMerchant(merchant) {
  const results = Products.filter(
    (product) => product.merchantName == merchant
  );
  results.sort((itemA, itemB) => itemB.ecoRating - itemA.ecoRating);
  return results;
}

export function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}
