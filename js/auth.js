// Validate email format
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Validate password (ít nhất 6 ký tự, có chữ và số)
function isValidPassword(password) {
    return password.length >= 6 && /[A-Za-z]/.test(password) && /[0-9]/.test(password);
}

// Kiểm tra email đã tồn tại chưa
function isEmailExists(email) {
    // Lấy danh sách email đã đăng ký từ localStorage
    const registeredEmails = JSON.parse(localStorage.getItem('registeredEmails') || '[]');
    return registeredEmails.includes(email);
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

    // Kiểm tra email đã tồn tại chưa
    if (isEmailExists(email)) {
        alert('Email này đã được đăng ký! Vui lòng sử dụng email khác.');
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

    // Lưu thông tin vào localStorage
    const registeredEmails = JSON.parse(localStorage.getItem('registeredEmails') || '[]');
    registeredEmails.push(email);
    localStorage.setItem('registeredEmails', JSON.stringify(registeredEmails));
    
    // Lưu thông tin tài khoản
    localStorage.setItem(`user_${email}`, password);

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

    // Kiểm tra thông tin đăng nhập
    const savedPassword = localStorage.getItem(`user_${email}`);

    if (savedPassword && password === savedPassword) {
        alert('Đăng nhập thành công!');
        localStorage.setItem('isLoggedIn', 'true');
        localStorage.setItem('currentUser', email);
        window.location.href = 'index.html';
    } else {
        alert('Email hoặc mật khẩu không đúng!');
    }
} 