// Function to generate a random discount code
function generateDiscountCode() {
    const prefix = "7TCC"; // Fixed prefix
    const year = new Date().getFullYear();
    const randomNum = Math.floor(Math.random() * 1000).toString().padStart(3, '0');
    return `${prefix}${year}${randomNum}`;
}

// Handle discount button clicks
document.addEventListener('DOMContentLoaded', function() {
    const discountButtons = document.querySelectorAll('.discount-btn');
    
    discountButtons.forEach(button => {
        button.addEventListener('click', function() {
            const code = generateDiscountCode();
            alert(`Đã nhận mã giảm giá thành công! Mã của bạn là ${code}`);
        });
    });
}); 