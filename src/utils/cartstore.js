// Add Products ID to LocalStorage
const addToLocalStorage = (id) => {
  let products = JSON.parse(localStorage.getItem("products"));
  if (products) {
    products.push(id);
    localStorage.setItem("products", JSON.stringify(products));
  } else {
    localStorage.setItem("products", JSON.stringify([id]));
  }
};

// Remove Products ID from LocalStorage
const removeFromLocalStorage = (id) => {
  let products = JSON.parse(localStorage.getItem("products"));
  if (products) {
    products = products.filter((product) => product !== id);
    localStorage.setItem("products", JSON.stringify(products));
  }
};

// Get Products ID from LocalStorage
const getFromLocalStorage = () => {
  let products = JSON.parse(localStorage.getItem("products"));
  if (products) {
    return products;
  } else {
    return [];
  }
};

// Clear LocalStorage
const clearLocalStorage = () => {
  localStorage.removeItem("products");
};

export {
  addToLocalStorage,
  removeFromLocalStorage,
  getFromLocalStorage,
  clearLocalStorage,
};
