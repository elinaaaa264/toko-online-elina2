let total = 0;

function addToCart(productName, price) {
  const cartItems = document.getElementById('cart-items');
  const li = document.createElement('li');
  li.textContent = `${productName} - Rp ${price.toLocaleString()}`;
  cartItems.appendChild(li);

  total += price;
  document.getElementById('total').textContent = `Total: Rp ${total.toLocaleString()}`;
}
