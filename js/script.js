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
        
        // Ẩn tất cả sản phẩm với animation
        products.fadeOut(300);
        
        // Hiển thị loading
        $('#product-container').append('<div id="loading" class="text-center w-100 my-4"><i class="fas fa-spinner fa-spin fa-2x"></i></div>');
        
        setTimeout(() => {
            // Xóa loading
            $('#loading').remove();
            
            // Chọn ngẫu nhiên 3 sản phẩm
            const shuffled = products.toArray().sort(() => 0.5 - Math.random());
            const selected = shuffled.slice(0, 3);
            
            // Hiển thị 3 sản phẩm được chọn với animation
            $(selected).each(function(index) {
                $(this).delay(index * 200).fadeIn(300);
            });
        }, 800);
    }

    // Xử lý sự kiện tìm kiếm
    $('#sidebar-search-input, #nav-search-input').on('input', function() {
        if($(this).val().length > 0) {
            filterProducts();
        }
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