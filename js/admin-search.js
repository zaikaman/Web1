// Hàm chung để xử lý tìm kiếm với loading animation
function handleSearch(containerId, searchInputId) {
    const container = document.getElementById(containerId);
    const searchInput = document.getElementById(searchInputId);
    const items = container.getElementsByTagName('tr');
    const dataRows = Array.from(items).slice(1); // Bỏ qua hàng tiêu đề

    // Nếu input rỗng, hiển thị lại tất cả các dòng
    if (!searchInput.value.trim()) {
        // Xóa loading nếu có
        const existingSpinner = document.getElementById('loading-' + containerId);
        if (existingSpinner) {
            existingSpinner.remove();
        }
        
        // Hiển thị lại tất cả các dòng với animation
        dataRows.forEach((row, index) => {
            setTimeout(() => {
                row.style.display = '';
                row.style.opacity = '0';
                fadeIn(row);
            }, index * 50);
        });
        return;
    }

    // Ẩn tất cả các dòng
    dataRows.forEach(row => {
        row.style.display = 'none';
    });

    // Thêm loading spinner
    const loadingSpinner = document.createElement('tr');
    loadingSpinner.id = 'loading-' + containerId;
    loadingSpinner.innerHTML = `
        <td colspan="100%" class="text-center py-4">
            <i class="fas fa-spinner fa-spin fa-2x"></i>
        </td>
    `;
    if (dataRows[0]) {
        dataRows[0].parentNode.insertBefore(loadingSpinner, dataRows[0]);
    }

    // Sau 800ms, xóa loading và hiển thị 3 kết quả đầu tiên
    setTimeout(() => {
        // Xóa loading spinner
        const spinner = document.getElementById('loading-' + containerId);
        if (spinner) {
            spinner.remove();
        }

        // Hiển thị 3 dòng đầu tiên với animation
        for (let i = 0; i < Math.min(3, dataRows.length); i++) {
            setTimeout(() => {
                dataRows[i].style.display = '';
                dataRows[i].style.opacity = '0';
                fadeIn(dataRows[i]);
            }, i * 200);
        }
    }, 800);
}

// Hàm tạo hiệu ứng fade in
function fadeIn(element) {
    let opacity = 0;
    element.style.opacity = opacity;

    const fadeEffect = setInterval(() => {
        if (opacity < 1) {
            opacity += 0.1;
            element.style.opacity = opacity;
        } else {
            clearInterval(fadeEffect);
        }
    }, 50);
}

// Khởi tạo các event listener khi trang được load
document.addEventListener('DOMContentLoaded', function() {
    // Tìm kiếm đơn hàng
    const orderSearchInput = document.querySelector('#orders .search-box input');
    if (orderSearchInput) {
        orderSearchInput.addEventListener('input', () => {
            handleSearch('orders-table', 'order-search');
        });
    }

    // Tìm kiếm người dùng
    const userSearchInput = document.querySelector('#users .search-box input');
    if (userSearchInput) {
        userSearchInput.addEventListener('input', () => {
            handleSearch('users-table', 'user-search');
        });
    }

    // Tìm kiếm bài viết
    const postSearchInput = document.querySelector('#posts .search-box input');
    if (postSearchInput) {
        postSearchInput.addEventListener('input', () => {
            handleSearch('posts-table', 'post-search');
        });
    }

    // Tìm kiếm sản phẩm
    const productSearchInput = document.querySelector('#products .search-box input');
    if (productSearchInput) {
        productSearchInput.addEventListener('input', () => {
            handleSearch('products-table', 'product-search');
        });
    }
}); 