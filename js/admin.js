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

    // Xử lý nút xóa trong các tab
    document.querySelectorAll('.btn-delete').forEach(button => {
        button.addEventListener('click', function() {
            const itemType = this.closest('table').id.replace('-table', '');
            const itemName = {
                'products': 'sản phẩm',
                'orders': 'đơn hàng', 
                'users': 'người dùng',
                'posts': 'bài viết'
            }[itemType] || 'mục';
            
            if (confirm(`Bạn có chắc chắn muốn xóa ${itemName} này?`)) {
                // Xóa hàng chứa nút xóa được click
                this.closest('tr').remove();
                // Hiển thị thông báo
                alert(`Đã xóa ${itemName} thành công!`);
            }
        });
    });

    // Khởi tạo modal
    const orderDetailModal = new bootstrap.Modal(document.getElementById('orderDetailModal'));

    // Thêm sự kiện click cho các nút xem chi tiết đơn hàng
    document.querySelectorAll('.view-order-btn').forEach(button => {
        button.addEventListener('click', function() {
            // Cập nhật thông tin cố định trong modal
            document.getElementById('orderIdSpan').textContent = 'ĐH001';
            document.getElementById('customerName').textContent = 'Nguyễn Văn A';
            document.getElementById('customerEmail').textContent = 'nguyenvana@email.com';
            document.getElementById('customerPhone').textContent = '0123456789';
            document.getElementById('customerAddress').textContent = '123 Đường ABC, Quận 1, TP.HCM';
            
            document.getElementById('orderDate').textContent = '20/11/2023';
            document.getElementById('orderStatus').textContent = 'Hoàn Thành';
            document.getElementById('orderStatus').className = 'badge bg-success';
            document.getElementById('paymentMethod').textContent = 'Thanh toán khi nhận hàng';
            
            // Danh sách sản phẩm cố định
            document.getElementById('orderProducts').innerHTML = `
                <div class="d-flex justify-content-between align-items-center mb-2">
                    <div>
                        <h6 class="mb-0">Nike Air Max x2</h6>
                        <small class="text-muted">Đơn giá: 2.990.000₫ x 2</small>
                    </div>
                    <span>5.980.000₫</span>
                </div>
            `;
            
            // Tổng tiền cố định
            document.getElementById('subtotal').textContent = '5.980.000₫';
            document.getElementById('shipping').textContent = '30.000₫';
            document.getElementById('total').textContent = '6.010.000₫';
            
            // Ghi chú cố định
            document.getElementById('orderNotes').textContent = 'Giao hàng trong giờ hành chính';
            
            // Hiển thị modal
            orderDetailModal.show();
        });
    });

    // Thêm sự kiện click cho các nút in đơn hàng
    document.querySelectorAll('.btn-warning').forEach(button => {
        button.addEventListener('click', function() {
            // Tạo nội dung in
            const printContent = `
                <div style="padding: 20px;">
                    <h2 style="text-align: center; margin-bottom: 20px;">CHI TIẾT ĐƠN HÀNG #ĐH001</h2>
                    
                    <div style="margin-bottom: 30px;">
                        <h4>Thông Tin Khách Hàng</h4>
                        <p><strong>Họ tên:</strong> Nguyễn Văn A</p>
                        <p><strong>Email:</strong> nguyenvana@email.com</p>
                        <p><strong>Số điện thoại:</strong> 0123456789</p>
                        <p><strong>Địa chỉ:</strong> 123 Đường ABC, Quận 1, TP.HCM</p>
                    </div>
                    
                    <div style="margin-bottom: 30px;">
                        <h4>Thông Tin Đơn Hàng</h4>
                        <p><strong>Ngày đặt:</strong> 20/11/2023</p>
                        <p><strong>Trạng thái:</strong> Hoàn Thành</p>
                        <p><strong>Phương thức thanh toán:</strong> Thanh toán khi nhận hàng</p>
                    </div>
                    
                    <div style="margin-bottom: 30px;">
                        <h4>Chi Tiết Sản Phẩm</h4>
                        <div style="border-bottom: 1px solid #ddd; padding: 10px 0;">
                            <div style="display: flex; justify-content: space-between;">
                                <div>
                                    <p style="margin: 0;"><strong>Nike Air Max x2</strong></p>
                                    <small>Đơn giá: 2.990.000₫ x 2</small>
                                </div>
                                <span>5.980.000₫</span>
                            </div>
                        </div>
                    </div>
                    
                    <div style="margin-bottom: 30px;">
                        <div style="display: flex; justify-content: space-between; margin-bottom: 10px;">
                            <strong>Tổng tiền sản phẩm:</strong>
                            <span>5.980.000₫</span>
                        </div>
                        <div style="display: flex; justify-content: space-between; margin-bottom: 10px;">
                            <strong>Phí vận chuyển:</strong>
                            <span>30.000₫</span>
                        </div>
                        <div style="display: flex; justify-content: space-between; padding-top: 10px; border-top: 2px solid #000;">
                            <strong>Tổng cộng:</strong>
                            <strong>6.010.000₫</strong>
                        </div>
                    </div>
                    
                    <div>
                        <h4>Ghi Chú</h4>
                        <p>Giao hàng trong giờ hành chính</p>
                    </div>
                </div>
            `;

            // Tạo cửa sổ in mới
            const printWindow = window.open('', '_blank');
            printWindow.document.write(`
                <html>
                    <head>
                        <title>In Đơn Hàng #ĐH001</title>
                        <meta charset="UTF-8">
                    </head>
                    <body>
                        ${printContent}
                        <script>
                            window.onload = function() {
                                window.print();
                                window.onafterprint = function() {
                                    window.close();
                                }
                            }
                        </script>
                    </body>
                </html>
            `);
            printWindow.document.close();
        });
    });
});

// Hàm in đơn hàng
function printOrder() {
    window.print();
}

// Thêm chức năng đăng xuất
function logout() {
    localStorage.removeItem('adminLoggedIn');
    window.location.href = 'admin-login.html';
}