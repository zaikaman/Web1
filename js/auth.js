// Validate email format
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Validate password (ít nhất 6 ký tự, có chữ và số)
function isValidPassword(password) {
    return password.length >= 6 && /[A-Za-z]/.test(password) && /[0-9]/.test(password);
}

// Xử lý đăng ký
function handleSignup(event) {
    event.preventDefault();
    
    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    // Validate input
    if (!email || !password || !confirmPassword) {
        alert('Vui lòng điền đầy đủ thông tin!');
        return;
    }

    if (!isValidEmail(email)) {
        alert('Email không hợp lệ!');
        return;
    }

    if (!isValidPassword(password)) {
        alert('Mật khẩu phải có ít nhất 6 ký tự, bao gồm cả chữ và số!');
        return;
    }

    if (password !== confirmPassword) {
        alert('Mật khẩu xác nhận không khớp!');
        return;
    }

    alert('Đăng ký thành công!');
    window.location.href = 'signin.html';
}

// Xử lý đăng nhập
function handleSignin(event) {
    event.preventDefault();
    
    const email = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Validate input
    if (!email || !password) {
        alert('Vui lòng điền đầy đủ thông tin!');
        return;
    }

    if (!isValidEmail(email)) {
        alert('Email không hợp lệ!');
        return;
    }

    if (!isValidPassword(password)) {
        alert('Mật khẩu không hợp lệ!');
        return;
    }

    alert('Đăng nhập thành công!');
    window.location.href = 'index.html';
} 