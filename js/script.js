$(document).ready(function () {

    $(window).scroll(function () {
        var aaa = screen.width;
        if (aaa > 1111) {
            var height = $(window).scrollTop();
        }
    });

    // click img detailproduct
    $(".product-gallery__thumb").click(function (e) {
        $('.product-gallery__thumb').removeClass('active');
        var b = $(this).attr('class');
        console.log(b);
        $(this).addClass('active');
        e.stopPropagation();
        var a = b + "-placeholder";
        console.log(a);

        var hrefAttr = $('.' + a).attr('data-image');
        console.log(hrefAttr);
    });

    var id1 = 1
    $('.product-gallery__thumb').click(function (e) {
        e.preventDefault();
        id1 = $(this).attr('id') + 'a';
        console.log(id1);
        var elmnt = document.getElementById('' + id1);
        elmnt.scrollIntoView({
            block: 'start',
            behavior: 'smooth',
            inline: 'start'
        });
    });

    var ac = screen.width;
    if (ac < 768) {
        $('.product-content-desc').css({
            "position": "relative",
        })
    }

    $('.owl-product1').owlCarousel({
        loop: true,
        margin: 0,
        nav: true,
        dots: true,
        navText: ['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>'],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    })

    $('.zoom-in').click(function (e) {
        e.preventDefault();
        $('.product-zoom11').slideDown();
        e.stopPropagation();
    });

    $('.divclose').click(function (e) {
        e.preventDefault();
        $('.product-zoom11').slideUp();
        e.stopPropagation();
    });

    $('.registratior_custom').fadeIn(200);
    $('.x-close').click(function (e) {
        e.preventDefault();
        $('.registratior_custom').fadeOut(0);
    });

    // Xử lý hiệu ứng slide in khi scroll
    function checkSlide() {
        const elements = document.querySelectorAll('.slide-in, .slide-in-left, .slide-in-right');
        
        elements.forEach(element => {
            const slideInAt = (window.scrollY + window.innerHeight) - element.offsetHeight / 2;
            const elementBottom = element.offsetTop + element.offsetHeight;
            const isHalfShown = slideInAt > element.offsetTop;
            const isNotScrolledPast = window.scrollY < elementBottom;
            
            if (isHalfShown && isNotScrolledPast) {
                element.classList.add('active');
            }
        });
    }

    window.addEventListener('scroll', checkSlide);
    window.addEventListener('load', checkSlide);

    // Chức năng tìm kiếm giả
    function filterProducts() {
        const products = $('#product-container .product-block').parent();
        const searchInput = $('#sidebar-search-input').val().trim() || $('#nav-search-input').val().trim();
        const priceRange = $('#price-range option:selected').text();
        const sortBy = $('#sort-by option:selected').text();
        
        // Xóa loading nếu có
        $('#loading').remove();

        // Kiểm tra tất cả điều kiện có ở trạng thái mặc định không
        const isDefaultState = !searchInput && 
                             priceRange === 'Tất cả giá' && 
                             sortBy === 'Tên A-Z';

        console.log('Current State:', {
            searchInput,
            priceRange,
            sortBy,
            isDefault: isDefaultState
        });

        // Nếu tất cả đều ở trạng thái mặc định
        if (isDefaultState) {
            // Hiển thị lại tất cả sản phẩm với animation
            products.stop(true, true).each(function(index) {
                const product = $(this);
                product.show();
                product.css('opacity', '0');
                setTimeout(() => {
                    product.animate({opacity: 1}, 300);
                }, index * 50);
            });
            return;
        }
        
        // Ẩn tất cả sản phẩm với animation
        products.fadeOut(300);
        
        // Hiển thị loading
        $('#product-container').append('<div id="loading" class="text-center w-100 my-4"><i class="fas fa-spinner fa-spin fa-2x"></i></div>');
        
        setTimeout(() => {
            // Xóa loading
            $('#loading').remove();
            
            // Lấy 3 sản phẩm đầu tiên
            const firstThree = products.slice(0, 3);
            
            // Hiển thị 3 sản phẩm đầu tiên với animation
            firstThree.each(function(index) {
                const product = $(this);
                product.show();
                product.css('opacity', '0');
                setTimeout(() => {
                    product.animate({opacity: 1}, 300);
                }, index * 200);
            });
        }, 800);
    }

    // Xử lý sự kiện tìm kiếm
    $('#sidebar-search-input, #nav-search-input').on('input', function() {
        filterProducts();
    });

    // Xử lý sự kiện thay đổi khoảng giá
    $('#price-range').change(function() {
        filterProducts();
    });

    // Xử lý sự kiện sắp xếp
    $('#sort-by').change(function() {
        filterProducts();
    });
});