var cartItems = [];

function addToCart(pizza) {
  cartItems.push(pizza);
  renderCart();
}

function renderCart() {
  var cartList = document.getElementById('cart-items');
  cartList.innerHTML = '';

  cartItems.forEach(function(item) {
    var li = document.createElement('li');
    li.textContent = item;
    cartList.appendChild(li);
  });
}

function checkout() {
  alert('Thank you for your order!');
  cartItems = [];
  renderCart();
}
