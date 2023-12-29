// Function to increase quantity
function increaseQuantity(button) {
    const quantitySpan = button.parentElement.querySelector('.quantity');
    let quantity = parseInt(quantitySpan.textContent);
    quantity++;
    quantitySpan.textContent = quantity;
  }

  // Function to decrease quantity
  function decreaseQuantity(button) {
    const quantitySpan = button.parentElement.querySelector('.quantity');
    let quantity = parseInt(quantitySpan.textContent);
    if (quantity > 0) {
      quantity--;
      quantitySpan.textContent = quantity;
    }
  }
