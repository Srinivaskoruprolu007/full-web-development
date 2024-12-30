document.addEventListener("DOMContentLoaded", () => {
  const products = [
    { id: 1, name: "Product 1", price: 10.99 },
    { id: 2, name: "Product 2", price: 21.99 },
    { id: 3, name: "Product 3", price: 15.99 },
  ];

  const cart = [];
  const productList = document.getElementById("product-list");
  const cartItems = document.getElementById("cart-items");
  const emptyCart = document.getElementById("empty-cart");
  const cartTotal = document.getElementById("cart-total");
  const totalPriceDiv = document.getElementById("total-price");
  const checkoutBtn = document.getElementById("checkout-btn");

  products.forEach((product) => {
    const productCard = document.createElement("div");
    productCard.classList.add("product-card");
    productCard.innerHTML = `
    <span>${product.name} - $${product.price.toFixed(2)}</span>
    <button class="add-to-cart-btn" data-id="${product.id}">Add to Cart</button>
    `;
    productList.appendChild(productCard);
  });

  productList.addEventListener("click", (e) => {
    if (e.target.tagName === "BUTTON") {
      let productId = parseInt(e.target.getAttribute("data-id"));
      const product = products.find((product) => product.id === productId);
      addToCart(product);
      renderCart();
    }
  });
  function addToCart(product) {
    cart.push(product);
  }
  function renderCart() {
    cartItems.innerHTML = "";
    let totalPrice = totalPriceCal();
    if (cart.length) {
      emptyCart.classList.add("hidden");
      cartTotal.classList.remove("hidden");
      cart.forEach((product) => {
        const cartItem = document.createElement("div");
        cartItem.innerHTML = `
        ${product.name} - $${product.price.toFixed(2)}
        <button class="remove-from-cart-btn" data-id="${
          product.id
        }">Remove</button>
        `;
        totalPriceDiv.textContent = `$${totalPrice.toFixed(2)}`;
        cartItems.appendChild(cartItem);
      });
    } else {
      emptyCart.classList.add("hidden");
      cartTotal.classList.remove("hidden");
    }
  }
  cartItems.addEventListener("click", (e) => {
    if (e.target.tagName === "BUTTON") {
      let productId = parseInt(e.target.getAttribute("data-id"));
      const product = cart.find((product) => product.id === productId);
      cart.splice(cart.indexOf(product), 1);
      let totalPrice = totalPriceCal();
      totalPriceDiv.textContent = `$${totalPrice.toFixed(2)}`;
      renderCart();
    }
  });
  function totalPriceCal() {
    let totalPrice = 0;
    cart.forEach((product) => {
      totalPrice += product.price;
    });
    return totalPrice;
  }
});
