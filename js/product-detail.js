document.addEventListener('DOMContentLoaded', function() {
  // Lấy product ID từ URL parameter
  const urlParams = new URLSearchParams(window.location.search);
  const productId = parseInt(urlParams.get('id'));
  
  // Tìm sản phẩm trong mảng products
  const product = products.find(p => p.id === productId);
  
  if (product) {
    // Cập nhật thông tin sản phẩm
    document.getElementById('product-main-image').src = product.images[0];
    document.getElementById('product-main-image').alt = product.name;
    document.getElementById('product-name').textContent = product.name;
    document.getElementById('pro_sku').textContent = `SKU: ${product.sku}`;
    document.getElementById('product-price').textContent = product.price.toLocaleString('vi-VN') + '₫';
    
    // Cập nhật màu sắc
    const colorSelect = document.getElementById('product-colors');
    product.colors.forEach(color => {
      const option = document.createElement('option');
      option.value = color;
      option.textContent = color;
      colorSelect.appendChild(option);
    });
    
    // Cập nhật size
    const sizeSelect = document.getElementById('product-sizes');
    product.sizes.forEach(size => {
      const option = document.createElement('option');
      option.value = size;
      option.textContent = size;
      sizeSelect.appendChild(option);
    });
    
    // Cập nhật mô tả
    document.getElementById('product-description').textContent = product.description.text;
    const detailsList = document.getElementById('product-details');
    product.description.details.forEach(detail => {
      const li = document.createElement('li');
      li.textContent = detail;
      detailsList.appendChild(li);
    });
    
    document.getElementById('breadcrumb-name').textContent = product.name;
    
    if (product.images.length > 1) {
      const gallery = document.querySelector('.product-image-list');
      product.images.forEach(img => {
        gallery.innerHTML += `
          <div class="item">
            <img src="${img}" alt="${product.name}" onclick="changeMainImage('${img}')">
          </div>
        `;
      });
      
      // Initialize owl carousel
      $('.product-image-list').owlCarousel({
        items: 4,
        nav: true,
        dots: false
      });
    }
  }
});

function addToCart() {
  const quantity = document.getElementById('quantity').value;
  const color = document.getElementById('product-colors').value;
  const size = document.getElementById('product-sizes').value;
  
  // TODO: Thêm logic xử lý giỏ hàng
  alert('Đã thêm sản phẩm vào giỏ hàng!');
}

document.querySelector('.btn-buy-now').addEventListener('click', function() {
  // TODO: Xử lý mua ngay
});

function changeMainImage(src) {
  document.getElementById('product-main-image').src = src;
} 