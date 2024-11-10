const products = [
  {
    id: 1,
    name: "Nike Air Max 90 Essential 'Grape'",
    price: 4800000,
    sku: "N-0015-1",
    images: ["images/shoes/1.jpg", "images/shoes/1-1.jpg"],
    colors: ["Đỏ", "Trắng"],
    sizes: [36, 37, 38, 35],
    description: {
      text: "Nike Air Max 90 Essential 'Grape' - Phiên bản giới hạn với tông màu đỏ trắng độc đáo.",
      details: [
        "Chất liệu: Vải mesh, da cao cấp",
        "Đệm khí Air Max đặc trưng",
        "Thiết kế retro classic",
        "Phối màu đỏ trắng nổi bật",
        "Form dáng chuẩn, đẹp"
      ]
    }
  },
  {
    id: 2, 
    name: "Nike Air Max 1 Just Do It",
    price: 6400000,
    sku: "N-0013-1",
    images: ["images/shoes/2.jpg", "images/shoes/2-2.jpg"],
    colors: ["Trắng", "Cam"],
    sizes: [39, 40, 41, 42],
    description: {
      text: "Nike Air Max 1 Just Do It - Phiên bản đặc biệt với slogan huyền thoại.",
      details: [
        "Upper da cao cấp và vải mesh",
        "Logo Just Do It độc đáo",
        "Đệm Air Max đặc trưng",
        "Thiết kế retro kinh điển",
        "Phối màu trắng/cam nổi bật"
      ]
    }
  },
  {
    id: 3,
    name: "Nike Air Max 97 Premium",
    price: 4500000,
    sku: "N-0024-1", 
    images: ["images/shoes/3.jpg", "images/shoes/3-3.jpg"],
    colors: ["Tím", "Xanh"],
    sizes: [38, 39, 40, 41],
    description: {
      text: "Nike Air Max 97 Premium - Phiên bản cao cấp với phối màu tím xanh độc đáo.",
      details: [
        "Upper premium với các lớp phủ metallic",
        "Đệm Air Max full-length",
        "Đế cao su bền bỉ",
        "Thiết kế lấy cảm hứng từ tàu cao tốc Nhật",
        "Logo 3M phản quang"
      ]
    }
  },
  {
    id: 4,
    name: "Nike Air Max 97 London Summer of Love",
    price: 5200000,
    sku: "N-0019-1",
    images: ["images/shoes/4.jpg", "images/shoes/4-4.jpg"],
    colors: ["Cầu vồng", "Trắng"],
    sizes: [39, 40, 41, 42],
    description: {
      text: "Nike Air Max 97 London Summer of Love - Phiên bản đặc biệt với sắc màu rực rỡ.",
      details: [
        "Thiết kế đa sắc màu độc đáo",
        "Upper với nhiều lớp chất liệu",
        "Đệm Air Max full-length",
        "Chi tiết phản quang 3M",
        "Phối màu lấy cảm hứng từ London"
      ]
    }
  },
  {
    id: 5,
    name: "Nike Air Max 97 Blue Hero",
    price: 4900000,
    sku: "N-0031-1",
    images: ["images/shoes/5.jpg", "images/shoes/5-5.jpg"],
    colors: ["Xanh dương", "Trắng"],
    sizes: [38, 39, 40, 41],
    description: {
      text: "Nike Air Max 97 Blue Hero - Phiên bản với tông màu xanh dương nổi bật.",
      details: [
        "Upper mesh và synthetic cao cấp",
        "Đệm Air Max full-length",
        "Đế cao su chống trơn trượt",
        "Thiết kế đường nét mượt mà",
        "Phù hợp phong cách năng động"
      ]
    }
  },
  {
    id: 6,
    name: "Nike Air Huarache Triple White",
    price: 3800000,
    sku: "N-0022-1",
    images: ["images/shoes/6.jpg", "images/shoes/6-6.jpg"],
    colors: ["Trắng"],
    sizes: [39, 40, 41, 42],
    description: {
      text: "Nike Air Huarache Triple White - Phiên bản full trắng tinh khôi của dòng giày huyền thoại.",
      details: [
        "Upper neoprene co giãn",
        "Cage nhựa định hình",
        "Đệm Air-Sole",
        "Đế phylon siêu nhẹ",
        "Thiết kế minimalist hiện đại"
      ]
    }
  },
  {
    id: 7,
    name: "Nike Air Force 1 Shadow Coral",
    price: 3600000,
    sku: "N-0025-1",
    images: ["images/shoes/7.jpg", "images/shoes/7-7.jpg"],
    colors: ["Trắng", "Hồng"],
    sizes: [36, 37, 38, 39],
    description: {
      text: "Nike Air Force 1 Shadow Coral - Biến tấu độc đáo của dòng giày Air Force 1 huyền thoại.",
      details: [
        "Upper da cao cấp nhiều lớp",
        "Chi tiết overlay độc đáo",
        "Đệm Air đặc trưng",
        "Đế cao su bền bỉ",
        "Phong cách nữ tính, cá tính"
      ]
    }
  },
  {
    id: 8,
    name: "Nike Off-White x Air Force 1 Low",
    price: 5500000,
    sku: "N-0028-1",
    images: ["images/shoes/8.jpg", "images/shoes/8-8.jpg"],
    colors: ["Trắng", "Bạc"],
    sizes: [39, 40, 41, 42],
    description: {
      text: "Nike Off-White x Air Force 1 Low - Phiên bản collab đặc biệt với Off-White.",
      details: [
        "Chất liệu da cao cấp",
        "Chi tiết thiết kế Off-White đặc trưng",
        "Dây giày phong cách industrial",
        "Đế Air Force 1 classic",
        "Phiên bản giới hạn cao cấp"
      ]
    }
  },
  {
    id: 9,
    name: "Nike Air Max 97 Silver Bullet",
    price: 4200000,
    sku: "N-0071-1",
    images: ["images/shoes/9.jpg", "images/shoes/9-9.jpg"],
    colors: ["Bạc", "Đỏ"],
    sizes: [38, 39, 40, 41],
    description: {
      text: "Nike Air Max 97 Silver Bullet - Phiên bản OG với tông màu bạc đặc trưng.",
      details: [
        "Upper metallic với lớp phủ 3M",
        "Đệm Air Max full-length",
        "Đế cao su bền bỉ",
        "Chi tiết swoosh đỏ nổi bật",
        "Phiên bản retro được yêu thích"
      ]
    }
  },
  {
    id: 10,
    name: "Nike Air Max 97 Triple White",
    price: 4100000,
    sku: "N-0072-1",
    images: ["images/shoes/10.jpg", "images/shoes/10-10.jpg"],
    colors: ["Trắng"],
    sizes: [39, 40, 41, 42],
    description: {
      text: "Nike Air Max 97 Triple White - Phiên bản full trắng tinh khôi.",
      details: [
        "Upper mesh và synthetic trắng",
        "Đệm Air Max full-length",
        "Đế cao su màu trắng",
        "Thiết kế tối giản",
        "Dễ dàng phối đồ"
      ]
    }
  },
  {
    id: 11,
    name: "Nike Air Max 97 Neon Seoul",
    price: 4800000,
    sku: "N-0073-1", 
    images: ["images/shoes/11.jpg", "images/shoes/11-11.jpg"],
    colors: ["Đen", "Nhiều màu"],
    sizes: [38, 39, 40, 41],
    description: {
      text: "Nike Air Max 97 Neon Seoul - Phiên bản đặc biệt lấy cảm hứng từ Seoul về đêm.",
      details: [
        "Upper đen với chi tiết neon",
        "Đệm Air Max full-length",
        "Các chi tiết phản quang",
        "Logo Taegukgi độc đáo",
        "Phối màu lấy cảm hứng từ Seoul"
      ]
    }
  },
  {
    id: 12,
    name: "Nike Air Max 97 Have A Nike Day",
    price: 4500000,
    sku: "N-0074-1",
    images: ["images/shoes/12.jpg", "images/shoes/12-12.jpg"],
    colors: ["Xanh mint", "Trắng"],
    sizes: [39, 40, 41, 42],
    description: {
      text: "Nike Air Max 97 Have A Nike Day - Phiên bản với thông điệp tích cực.",
      details: [
        "Upper màu mint refreshing",
        "Logo Have A Nike Day độc đáo",
        "Đệm Air Max full-length",
        "Chi tiết swoosh mini dễ thương",
        "Thiết kế vui tươi, tích cực"
      ]
    }
  },
  {
    id: 13,
    name: "Nike Air Max 270 React ENG",
    price: 4200000,
    sku: "N-0075-1",
    images: ["images/shoes/13.jpg", "images/shoes/13-13.jpg"],
    colors: ["Xanh dương", "Đen"],
    sizes: [39, 40, 41, 42],
    description: {
      text: "Nike Air Max 270 React ENG - Sự kết hợp hoàn hảo giữa đệm Air 270 và React.",
      details: [
        "Upper engineered mesh",
        "Đệm Air Max 270 độc đáo",
        "Công nghệ React êm ái",
        "Thiết kế đường nét sắc sảo",
        "Phù hợp lifestyle năng động"
      ]
    }
  },
  {
    id: 14,
    name: "Nike Air Max 97 Desert Sand",
    price: 4300000,
    sku: "N-0076-1",
    images: ["images/shoes/14.jpg", "images/shoes/14-14.jpg"],
    colors: ["Be", "Trắng"],
    sizes: [38, 39, 40, 41],
    description: {
      text: "Nike Air Max 97 Desert Sand - Phối màu trung tính thanh lịch.",
      details: [
        "Upper màu desert sand độc đáo",
        "Đệm Air Max full-length",
        "Đế cao su bền bỉ",
        "Thiết kế minimalist",
        "Dễ dàng phối đồ"
      ]
    }
  },
  {
    id: 15,
    name: "Nike Air Max 97 Ultra",
    price: 4600000,
    sku: "N-0077-1",
    images: ["images/shoes/15.jpg", "images/shoes/15-15.jpg"],
    colors: ["Xám", "Đen"],
    sizes: [39, 40, 41, 42],
    description: {
      text: "Nike Air Max 97 Ultra - Phiên bản cải tiến nhẹ hơn và thoáng khí hơn.",
      details: [
        "Upper mesh kỹ thuật nhẹ",
        "Đệm Air Max cải tiến",
        "Đế Ultra nhẹ",
        "Thiết kế hiện đại",
        "Thoải mái cả ngày dài"
      ]
    }
  },
  {
    id: 16,
    name: "Nike Air Max 97 Gold Medal",
    price: 4700000,
    sku: "N-0078-1",
    images: ["images/shoes/16.jpg", "images/shoes/16-16.jpg"],
    colors: ["Vàng", "Đen"],
    sizes: [38, 39, 40, 41],
    description: {
      text: "Nike Air Max 97 Gold Medal - Phiên bản đặc biệt với tông màu vàng sang trọng.",
      details: [
        "Upper metallic gold độc đáo",
        "Đệm Air Max full-length",
        "Chi tiết 3M phản quang",
        "Đế cao su bền bỉ",
        "Phong cách luxury sport"
      ]
    }
  },
  {
    id: 17,
    name: "Nike Air Max 97 'Puerto Rico'",
    price: 4800000,
    sku: "N-0079-1",
    images: ["images/shoes/17.jpg", "images/shoes/17-17.jpg"],
    colors: ["Trắng", "Xanh navy"],
    sizes: [39, 40, 41, 42],
    description: {
      text: "Nike Air Max 97 'Puerto Rico' - Phiên bản đặc biệt tôn vinh văn hóa Puerto Rico.",
      details: [
        "Upper da cao cấp màu trắng",
        "Chi tiết họa tiết Puerto Rico",
        "Đệm Air Max full-length",
        "Swoosh xanh navy nổi bật",
        "Thiết kế đậm chất văn hóa"
      ]
    }
  },
  {
    id: 18,
    name: "Nike Air Max 97 'Sakura'",
    price: 4900000,
    sku: "N-0080-1",
    images: ["images/shoes/18.jpg", "images/shoes/18-18.jpg"],
    colors: ["Hồng", "Trắng"],
    sizes: [38, 39, 40, 41],
    description: {
      text: "Nike Air Max 97 'Sakura' - Lấy cảm hứng từ hoa anh đào Nhật Bản.",
      details: [
        "Upper với họa tiết hoa anh đào",
        "Phối màu hồng pastel",
        "Đệm Air Max êm ái",
        "Chi tiết thêu hoa tinh tế",
        "Phong cách Nhật Bản hiện đại"
      ]
    }
  },
  {
    id: 19,
    name: "Nike Air Max 97 'Shanghai Kaleidoscope'",
    price: 5100000,
    sku: "N-0081-1",
    images: ["images/shoes/19.jpg", "images/shoes/19-19.jpg"],
    colors: ["Nhiều màu", "Trắng"],
    sizes: [39, 40, 41, 42],
    description: {
      text: "Nike Air Max 97 'Shanghai Kaleidoscope' - Thiết kế đa sắc màu lấy cảm hứng từ Thượng Hải.",
      details: [
        "Upper với họa tiết kaleidoscope",
        "Phối nhiều màu sắc độc đáo",
        "Đệm Air Max full-length",
        "Chi tiết phản quang 3M",
        "Thiết kế giới hạn đặc biệt"
      ]
    }
  },
  {
    id: 20,
    name: "Nike Air Max 97 'Silver Bullet 2023'",
    price: 4700000,
    sku: "N-0082-1",
    images: ["images/shoes/20.jpg", "images/shoes/20-20.jpg"],
    colors: ["Bạc", "Đỏ"],
    sizes: [38, 39, 40, 41],
    description: {
      text: "Nike Air Max 97 'Silver Bullet 2023' - Phiên bản tái bản của phối màu huyền thoại.",
      details: [
        "Upper metallic silver cao cấp",
        "Swoosh đỏ đặc trưng",
        "Đệm Air Max nguyên bản",
        "Chất liệu 3M phản quang",
        "Phiên bản kỷ niệm 2023"
      ]
    }
  }
];

// Hàm lọc sản phẩm theo category
function getProductsByCategory(category) {
  if (category === 'all') return products;
  return products.filter(p => p.category === category);
}