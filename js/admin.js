document.addEventListener('DOMContentLoaded', function() {
    // Kiểm tra đăng nhập
    if (!localStorage.getItem('adminLoggedIn')) {
        window.location.href = 'admin-login.html';
        return;
    }

    // Xử lý chuyển tab
    function switchToTab(tabId) {
        // Xóa active class từ tất cả các tab
        document.querySelectorAll('.content-section').forEach(section => {
            section.classList.remove('active');
        });
        document.querySelectorAll('.nav-link').forEach(link => {
            link.classList.remove('active');
        });

        // Thêm active class cho tab được chọn
        document.getElementById(tabId).classList.add('active');
        document.querySelector(`.nav-link[data-section="${tabId}"]`).classList.add('active');
    }

    // Xử lý nút "Xem Tất Cả Đơn Hàng"
    const viewAllOrdersBtn = document.getElementById('viewAllOrdersBtn');
    if (viewAllOrdersBtn) {
        viewAllOrdersBtn.addEventListener('click', function() {
            switchToTab('orders');
        });
    }

    // Xử lý click cho các tab trong sidebar
    document.querySelectorAll('.nav-link[data-section]').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const tabId = this.getAttribute('data-section');
            switchToTab(tabId);
        });
    });
});

// Thêm chức năng đăng xuất
function logout() {
    localStorage.removeItem('adminLoggedIn');
    window.location.href = 'admin-login.html';
} 