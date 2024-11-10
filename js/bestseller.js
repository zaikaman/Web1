document.addEventListener('DOMContentLoaded', function() {
  const productContainer = document.getElementById('product-container');
  
  // Danh sách sản phẩm bán chạy
  const bestSellers = [
    {
      name: "Adidas EQT Cushion ADV 'North America'",
      price: 7000000,
      images: ["images/shoes/1.jpg", "images/shoes/1-1.jpg"]
    },
    {
      name: "Adidas Nmd R1 'Villa Exclusive'",
      price: 7000000,
      images: ["images/shoes/2.jpg", "images/shoes/2-2.jpg"]
    },
    {
      name: "Adidas PW Solar HU NMD 'Inspiration Pack'",
      price: 5000000,
      images: ["images/shoes/3.jpg", "images/shoes/3-3.jpg"]
    },
    {
      name: "Adidas Ultraboost W",
      price: 5300000,
      images: ["images/shoes/4.jpg", "images/shoes/4-4.jpg"]
    }
  ];

  // Render sản phẩm
  bestSellers.forEach(product => {
    productContainer.innerHTML += `
      <div class="col-md-3 col-sm-6 col-xs-6 col-6">
        <div class="product-block">
          <div class="product-img fade-box">
            <a href="#" title="${product.name}" class="img-resize">
              <img src="${product.images[0]}" alt="${product.name}" class="lazyloaded">
              <img src="${product.images[1]}" alt="${product.name}" class="lazyloaded">
            </a>
          </div>
          <div class="product-detail clearfix">
            <div class="pro-text">
              <a style="color: black; font-size: 14px;text-decoration: none;" 
                 href="#" title="${product.name}">
                ${product.name}
              </a>
            </div>
            <div class="pro-price">
              <p class="">${product.price.toLocaleString('vi-VN')}₫</p>
            </div>
          </div>
        </div>
      </div>
    `;
  });
}); 