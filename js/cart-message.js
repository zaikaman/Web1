// Handle add to cart button clicks
document.addEventListener('DOMContentLoaded', function() {
    const addToCartButtons = document.querySelectorAll('.them-vao-btn');
    
    addToCartButtons.forEach(button => {
        button.addEventListener('click', function() {
            alert('Thêm vào giỏ hàng thành công!');
        });
    });
}); 