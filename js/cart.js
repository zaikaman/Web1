// Khởi tạo giỏ hàng trong localStorage nếu chưa có
if (!localStorage.getItem('cart')) {
  localStorage.setItem('cart', JSON.stringify([]));
}

// Thêm sản phẩm vào giỏ hàng
function addToCart(product) {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  cart.push(product);
  localStorage.setItem('cart', JSON.stringify(cart));
  updateCartUI();
}

// Cập nhật giao diện giỏ hàng
function updateCartUI() {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  const cartView = document.getElementById('cart-view');
  const totalView = document.getElementById('total-view-cart');
  
  if (!cartView) return;

  let html = '';
  let total = 0;

  cart.forEach(item => {
    const itemTotal = item.price * item.quantity;
    total += itemTotal;
    
    html += `
      <tr class="item_1">
        <td class="img">
          <a href="detailproduct.html?id=${item.id}" title="${item.name}">
            <img src="${item.image}" alt="${item.name}">
          </a>
        </td>
        <td>
          <a class="pro-title-view" style="color: #272727" href="detailproduct.html?id=${item.id}">${item.name}</a>
          <span class="variant">${item.color} / ${item.size}</span>
          <span class="pro-quantity-view">${item.quantity}</span>
          <span class="pro-price-view">${item.price.toLocaleString()}₫</span>
        </td>
      </tr>
    `;
  });

  cartView.innerHTML = html;
  totalView.textContent = total.toLocaleString() + '₫';
} 