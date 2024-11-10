// Khai báo biến ở phạm vi global
const productsPerPage = 8;
let currentPage = 1;
let filteredProducts = [];

// Hàm lọc sản phẩm
function filterProducts() {
  // Ưu tiên lấy giá trị từ sidebar search, nếu không có thì lấy từ nav search
  const searchInput = document.getElementById('sidebar-search-input') || 
                     document.getElementById('nav-search-input');
  const searchText = searchInput ? searchInput.value.toLowerCase() : '';

  const selectedBrands = Array.from(document.querySelectorAll('.brand-filter input:checked'))
    .map(input => input.value);
  const priceRange = document.getElementById('price-range').value;
  const sortBy = document.getElementById('sort-by').value;

  // Lọc theo tên và thương hiệu
  filteredProducts = products.filter(product => {
    const searchTerms = searchText.toLowerCase().split(' ');
    
    // Kiểm tra xem tất cả các từ khóa có tồn tại trong tên sản phẩm không
    const matchesSearch = searchTerms.every(term => 
      product.name.toLowerCase().includes(term)
    );

    const matchesBrand = selectedBrands.length === 0 || 
      selectedBrands.includes(product.brand.toLowerCase());
    
    // Lọc theo giá
    let matchesPrice = true;
    if (priceRange) {
      const [min, max] = priceRange.split('-').map(Number);
      matchesPrice = max ? 
        (product.price >= min && product.price <= max) :
        (product.price >= min);
    }

    return matchesSearch && matchesBrand && matchesPrice;
  });

  // Sắp xếp
  filteredProducts.sort((a, b) => {
    switch(sortBy) {
      case 'name-asc': return a.name.localeCompare(b.name);
      case 'name-desc': return b.name.localeCompare(a.name);
      case 'price-asc': return a.price - b.price;
      case 'price-desc': return b.price - a.price;
      default: return 0;
    }
  });

  currentPage = 1;
  displayProducts(currentPage);
}

// Hiển thị sản phẩm theo trang
function displayProducts(page) {
  const container = document.getElementById('product-container');
  const start = (page - 1) * productsPerPage;
  const end = Math.min(start + productsPerPage, filteredProducts.length);
  
  // Kiểm tra nếu không có sản phẩm nào
  if (filteredProducts.length === 0) {
    container.innerHTML = `
      <div class="col-12">
        <div class="alert alert-info text-center">
          Không tìm thấy sản phẩm nào phù hợp.
        </div>
      </div>
    `;
    return;
  }
  
  container.innerHTML = '';
  
  for(let i = start; i < end; i++) {
    const product = filteredProducts[i];
    container.innerHTML += `
      <div class="col-md-3 col-sm-6 col-xs-6 col-6">
        <div class="product-block">
          <div class="product-img fade-box">
            <a href="detailproduct.html?id=${product.id}" title="${product.name}" class="img-resize">
              <img src="${product.images[0]}" alt="${product.name}" class="lazyloaded">
              <img src="${product.images[1]}" alt="${product.name}" class="lazyloaded">
            </a>
          </div>
          <div class="product-detail clearfix">
            <div class="pro-text">
              <a style="color: black; font-size: 14px;text-decoration: none;" 
                 href="detailproduct.html?id=${product.id}" title="${product.name}">
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
  }
  
  updatePaginationButtons(Math.ceil(filteredProducts.length / productsPerPage));
}

// Cập nhật trạng thái nút phân trang
function updatePaginationButtons(totalPages) {
  const paginationContainer = document.querySelector('.pagination');
  document.querySelectorAll('.page-number').forEach(button => {
    button.classList.remove('active');
    if(parseInt(button.dataset.page) === currentPage) {
      button.classList.add('active');
    }
  });
  
  // Ẩn/hiện nút prev/next
  document.getElementById('prev-page').style.visibility = 
    currentPage === 1 ? 'hidden' : 'visible';
  document.getElementById('next-page').style.visibility = 
    currentPage === totalPages ? 'hidden' : 'visible';
}

// Thêm hàm xử lý chuyển trang
function changePage(page) {
  currentPage = page;
  displayProducts(currentPage);
}

// Khởi tạo khi DOM đã load
document.addEventListener('DOMContentLoaded', function() {
  // Khởi tạo filteredProducts từ products có sẵn
  filteredProducts = [...products];

  // Thêm event listeners cho cả 2 ô tìm kiếm
  const navSearchInput = document.getElementById('nav-search-input');
  const sidebarSearchInput = document.getElementById('sidebar-search-input');

  if (navSearchInput) {
    navSearchInput.addEventListener('input', function() {
      // Đồng bộ giá trị với ô search bên sidebar
      if (sidebarSearchInput) {
        sidebarSearchInput.value = this.value;
      }
      filterProducts();
    });
  }

  if (sidebarSearchInput) {
    sidebarSearchInput.addEventListener('input', function() {
      // Đồng bộ giá trị với ô search trên navigation
      if (navSearchInput) {
        navSearchInput.value = this.value;
      }
      filterProducts(); 
    });
  }
  // Các event listeners khác giữ nguyên
  document.getElementById('price-range').addEventListener('change', filterProducts);
  document.getElementById('sort-by').addEventListener('change', filterProducts);

  // Thêm event listeners cho các nút phân trang
  document.querySelectorAll('.page-number').forEach(button => {
    button.addEventListener('click', function() {
      changePage(parseInt(this.dataset.page));
    });
  });

  document.getElementById('prev-page').addEventListener('click', function() {
    if (currentPage > 1) {
      changePage(currentPage - 1);
    }
  });

  document.getElementById('next-page').addEventListener('click', function() {
    const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
    if (currentPage < totalPages) {
      changePage(currentPage + 1);
    }
  });

  // Load sản phẩm ban đầu
  displayProducts(1);
});

