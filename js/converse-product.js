const products = [
  {
    id: 39,
    name: "Converse Chuck 70 High Top Classic",
    price: 1900000,
    sku: "C-0001-1",
    category: "converse",
    images: ["images/Converse/1-1.jpg", "images/Converse/1-2.jpg"],
    colors: ["Đen", "Trắng"],
    sizes: [39, 40, 41, 42],
    description: {
      text: "Converse Chuck 70 High Top Classic - Phiên bản cao cấp của dòng Chuck Taylor.",
      details: [
        "Canvas 12oz cao cấp",
        "Đệm lót OrthoLite êm ái",
        "Logo patch cổ điển",
        "Đế cao su bền bỉ",
        "Đường may tỉ mỉ chắc chắn"
      ]
    }
  },
  {
    id: 40,
    name: "Converse Chuck Taylor All Star Classic",
    price: 1550000,
    sku: "C-0002-1",
    category: "converse",
    images: ["images/Converse/2-1.jpg", "images/Converse/2-2.jpg"],
    colors: ["Trắng", "Đen"],
    sizes: [38, 39, 40, 41],
    description: {
      text: "Converse Chuck Taylor All Star Classic - Biểu tượng thời trang bất hủ.",
      details: [
        "Canvas nhẹ thoáng khí",
        "Đệm lót EVA êm ái",
        "Logo All Star truyền thống",
        "Đế cao su chống trơn",
        "Thiết kế basic dễ phối"
      ]
    }
  },
  {
    id: 41,
    name: "Converse One Star Pro",
    price: 1850000,
    sku: "C-0003-1",
    category: "converse",
    images: ["images/Converse/3-1.jpg", "images/Converse/3-2.jpg"],
    colors: ["Đen", "Trắng"],
    sizes: [39, 40, 41, 42],
    description: {
      text: "Converse One Star Pro - Phiên bản nâng cấp cho dòng One Star huyền thoại.",
      details: [
        "Upper da lộn cao cấp",
        "Đệm CX foam êm ái",
        "Logo sao đặc trưng",
        "Đế cao su chống mòn",
        "Phù hợp trượt ván"
      ]
    }
  },
  {
    id: 42,
    name: "Converse Run Star Hike",
    price: 2200000,
    sku: "C-0004-1",
    category: "converse",
    images: ["images/Converse/4-1.jpg", "images/Converse/4-2.jpg"],
    colors: ["Trắng", "Đen"],
    sizes: [38, 39, 40, 41],
    description: {
      text: "Converse Run Star Hike - Phiên bản platform độc đáo của Chuck Taylor.",
      details: [
        "Upper canvas cao cấp",
        "Đế platform đặc biệt",
        "Logo Chuck 70 vintage",
        "Đế răng cưa độc đáo",
        "Phong cách hiện đại"
      ]
    }
  },
  {
    id: 43,
    name: "Converse CDG Play",
    price: 3200000,
    sku: "C-0005-1",
    category: "converse",
    images: ["images/Converse/5-1.jpg", "images/Converse/5-2.jpg"],
    colors: ["Trắng", "Đen"],
    sizes: [39, 40, 41, 42],
    description: {
      text: "Converse CDG Play - Collaboration độc đáo với Comme des Garçons.",
      details: [
        "Canvas cao cấp",
        "Logo tim CDG Play",
        "Đế cao su classic",
        "Thiết kế minimalist",
        "Phiên bản giới hạn"
      ]
    }
  },
  {
    id: 44,
    name: "Converse Chuck 70 Low Top",
    price: 1800000,
    sku: "C-0006-1",
    category: "converse",
    images: ["images/Converse/6-1.jpg", "images/Converse/6-2.jpg"],
    colors: ["Kem", "Trắng"],
    sizes: [38, 39, 40, 41],
    description: {
      text: "Converse Chuck 70 Low Top - Phiên bản thấp cổ của dòng Chuck 70.",
      details: [
        "Canvas dày dặn",
        "Đệm lót êm ái",
        "Logo vintage",
        "Đế cao su bền bỉ",
        "Phong cách retro"
      ]
    }
  },
  {
    id: 45,
    name: "Converse Jack Purcell",
    price: 1700000,
    sku: "C-0007-1",
    category: "converse",
    images: ["images/Converse/7-1.jpg", "images/Converse/7-2.jpg"],
    colors: ["Trắng", "Navy"],
    sizes: [39, 40, 41, 42],
    description: {
      text: "Converse Jack Purcell - Thiết kế tennis classic với nụ cười đặc trưng.",
      details: [
        "Canvas nhẹ bền",
        "Đường smile đặc trưng",
        "Đệm OrthoLite",
        "Đế cao su chống mòn",
        "Phong cách thanh lịch"
      ]
    }
  },
  {
    id: 46,
    name: "Converse Chuck 70 Plus",
    price: 2100000,
    sku: "C-0008-1",
    category: "converse",
    images: ["images/Converse/8-1.jpg", "images/Converse/8-2.jpg"],
    colors: ["Đen", "Trắng"],
    sizes: [38, 39, 40, 41],
    description: {
      text: "Converse Chuck 70 Plus - Phiên bản nâng cấp với công nghệ CX.",
      details: [
        "Upper canvas cao cấp",
        "Đệm CX foam",
        "Đế phylon nhẹ",
        "Thiết kế hiện đại",
        "Cực kỳ êm ái"
      ]
    }
  },
  {
    id: 47,
    name: "Converse Star Player",
    price: 1600000,
    sku: "C-0009-1",
    category: "converse",
    images: ["images/Converse/9-1.jpg", "images/Converse/9-2.jpg"],
    colors: ["Navy", "Trắng"],
    sizes: [39, 40, 41, 42],
    description: {
      text: "Converse Star Player - Thiết kế thể thao năng động.",
      details: [
        "Canvas bền bỉ",
        "Logo sao đặc trưng",
        "Đệm EVA êm ái",
        "Đế cao su chống trơn",
        "Phong cách sporty"
      ]
    }
  },
  {
    id: 48,
    name: "Converse Chuck Taylor Move",
    price: 1950000,
    sku: "C-0010-1",
    category: "converse",
    images: ["images/Converse/10-1.jpg", "images/Converse/10-2.jpg"],
    colors: ["Trắng", "Đen"],
    sizes: [38, 39, 40, 41],
    description: {
      text: "Converse Chuck Taylor Move - Phiên bản platform năng động.",
      details: [
        "Canvas chắc chắn",
        "Đế platform độc đáo",
        "Logo Chuck Taylor",
        "Đệm EVA êm ái",
        "Thiết kế cá tính"
      ]
    }
  },
  {
    id: 49,
    name: "Converse Chuck 70 Hi Gore-Tex",
    price: 2500000,
    sku: "C-0011-1",
    category: "converse",
    images: ["images/Converse/11-1.jpg", "images/Converse/11-2.jpg"],
    colors: ["Đen", "Xám"],
    sizes: [39, 40, 41, 42],
    description: {
      text: "Converse Chuck 70 Hi Gore-Tex - Chống nước hoàn hảo.",
      details: [
        "Công nghệ Gore-Tex",
        "Upper canvas chống nước",
        "Đệm OrthoLite",
        "Đế cao su bền bỉ",
        "Phù hợp mọi thời tiết"
      ]
    }
  },
  {
    id: 50,
    name: "Converse Weapon CX",
    price: 2300000,
    sku: "C-0012-1",
    category: "converse",
    images: ["images/Converse/12-1.jpg", "images/Converse/12-2.jpg"],
    colors: ["Trắng", "Đen"],
    sizes: [40, 41, 42, 43],
    description: {
      text: "Converse Weapon CX - Phiên bản hiện đại của giày bóng rổ huyền thoại.",
      details: [
        "Upper da cao cấp",
        "Đệm CX foam",
        "Công nghệ Stability Wings",
        "Đế cao su đặc biệt",
        "Cực kỳ êm ái"
      ]
    }
  },
  {
    id: 51,
    name: "Converse Chuck 70 Recycled Canvas",
    price: 2000000,
    sku: "C-0013-1",
    category: "converse",
    images: ["images/Converse/13-1.jpg", "images/Converse/13-2.jpg"],
    colors: ["Xanh", "Kem"],
    sizes: [38, 39, 40, 41],
    description: {
      text: "Converse Chuck 70 Recycled Canvas - Thân thiện với môi trường.",
      details: [
        "Canvas tái chế",
        "Đế cao su tự nhiên",
        "Logo patch tái chế",
        "Dây giày organic",
        "Thiết kế bền vững"
      ]
    }
  },
  {
    id: 52,
    name: "Converse Pro Leather",
    price: 1900000,
    sku: "C-0014-1",
    category: "converse",
    images: ["images/Converse/14-1.jpg", "images/Converse/14-2.jpg"],
    colors: ["Trắng", "Đỏ"],
    sizes: [39, 40, 41, 42],
    description: {
      text: "Converse Pro Leather - Phong cách bóng rổ cổ điển.",
      details: [
        "Upper da cao cấp",
        "Logo Chevron đặc trưng",
        "Đệm EVA êm ái",
        "Đế cao su bền bỉ",
        "Thiết kế vintage"
      ]
    }
  }
];

// Hàm lọc sản phẩm theo category
function getProductsByCategory(category) {
  if (category === 'all') return products;
  return products.filter(p => p.category === category);
}
