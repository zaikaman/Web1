const products = [
  {
    id: 21,
    name: "Adidas Ultra Boost 21",
    price: 4200000,
    sku: "A-0001-1", 
    category: "adidas",
    images: ["images/Adidas/1.jpg", "images/Adidas/1-1.jpg"],
    colors: ["Đen", "Trắng"],
    sizes: [39, 40, 41, 42],
    description: {
      text: "Adidas Ultra Boost 21 - Công nghệ đệm Boost mới nhất cho trải nghiệm tuyệt vời.",
      details: [
        "Upper Primeknit+ co giãn",
        "Đệm Boost tăng cường", 
        "Đế Continental™ bền bỉ",
        "Công nghệ Linear Energy Push",
        "Thiết kế hiện đại năng động"
      ]
    }
  },
  {
    id: 22,
    name: "Adidas NMD R1",
    price: 3800000,
    sku: "A-0002-1",
    category: "adidas", 
    images: ["images/Adidas/2.jpg", "images/Adidas/2-2.jpg"],
    colors: ["Xám", "Đen"],
    sizes: [40, 41, 42, 43],
    description: {
      text: "Adidas NMD R1 - Phong cách đường phố hiện đại với công nghệ Boost.",
      details: [
        "Upper vải dệt kim thoáng khí",
        "Đệm Boost nhẹ và đàn hồi",
        "Đế ngoài cao su bền bỉ",
        "Thiết kế minimalist hiện đại",
        "Phù hợp phong cách casual"
      ]
    }
  },
  {
    id: 23,
    name: "Adidas Superstar",
    price: 2500000,
    sku: "A-0003-1",
    category: "adidas",
    images: ["images/Adidas/3.jpg", "images/Adidas/3-3.jpg"],
    colors: ["Trắng", "Đen"],
    sizes: [38, 39, 40, 41],
    description: {
      text: "Adidas Superstar - Biểu tượng thời trang với mũi vỏ sò đặc trưng.",
      details: [
        "Upper da cao cấp",
        "Mũi vỏ sò đặc trưng",
        "Đế cao su chống trơn trượt",
        "3 Sọc adidas truyền thống",
        "Phong cách retro kinh điển"
      ]
    }
  },
  {
    id: 24,
    name: "Adidas Stan Smith",
    price: 2300000,
    sku: "A-0004-1",
    category: "adidas",
    images: ["images/Adidas/4.jpg", "images/Adidas/4-4.jpg"],
    colors: ["Trắng", "Xanh"],
    sizes: [39, 40, 41, 42],
    description: {
      text: "Adidas Stan Smith - Giày tennis huyền thoại trở thành biểu tượng thời trang.",
      details: [
        "Upper da trơn cao cấp",
        "Logo Stan Smith truyền thống",
        "Đế cao su bền bỉ",
        "Thiết kế tối giản",
        "Phù hợp mọi phong cách"
      ]
    }
  },
  {
    id: 25,
    name: "Adidas Ultraboost DNA",
    price: 4500000,
    sku: "A-0005-1",
    category: "adidas",
    images: ["images/Adidas/5.jpg", "images/Adidas/5-5.jpg"],
    colors: ["Trắng", "Bạc"],
    sizes: [40, 41, 42, 43],
    description: {
      text: "Adidas Ultraboost DNA - Kết hợp hoàn hảo giữa phong cách và hiệu năng.",
      details: [
        "Upper Primeknit co giãn",
        "Đệm Boost đàn hồi cao",
        "Đế Continental™ bền bỉ",
        "Thiết kế cổ điển của UltraBoost",
        "Chi tiết phản quang 3M"
      ]
    }
  },
  {
    id: 26,
    name: "Adidas ZX 750",
    price: 2800000,
    sku: "A-0006-1",
    category: "adidas",
    images: ["images/Adidas/6.jpg", "images/Adidas/6-6.jpg"],
    colors: ["Xanh", "Trắng"],
    sizes: [39, 40, 41, 42],
    description: {
      text: "Adidas ZX 750 - Thiết kế retro running với công nghệ hiện đại.",
      details: [
        "Upper mesh và da lộn",
        "Đệm EVA nhẹ nhàng",
        "Đế cao su chống mài mòn",
        "Thiết kế retro running",
        "Màu sắc phong phú"
      ]
    }
  },
  {
    id: 27,
    name: "Adidas Forum Low",
    price: 2600000,
    sku: "A-0007-1",
    category: "adidas",
    images: ["images/Adidas/7.jpg", "images/Adidas/7-7.jpg"],
    colors: ["Trắng", "Xanh"],
    sizes: [38, 39, 40, 41],
    description: {
      text: "Adidas Forum Low - Phong cách bóng rổ cổ điển được tái hiện.",
      details: [
        "Upper da cao cấp",
        "Dây đai cổ chân đặc trưng",
        "Đệm êm ái",
        "Logo Three Stripes",
        "Phong cách retro basketball"
      ]
    }
  },
  {
    id: 28,
    name: "Adidas Ozweego",
    price: 3200000,
    sku: "A-0008-1",
    category: "adidas",
    images: ["images/Adidas/8.jpg", "images/Adidas/8-8.jpg"],
    colors: ["Đen", "Xám"],
    sizes: [40, 41, 42, 43],
    description: {
      text: "Adidas Ozweego - Thiết kế chunky sneaker với công nghệ Adiprene.",
      details: [
        "Upper mesh và da tổng hợp",
        "Đệm Adiprene+ êm ái",
        "Thiết kế chunky đương đại",
        "Chi tiết phản quang",
        "Đế ngoài đa năng"
      ]
    }
  },
  {
    id: 29,
    name: "Adidas Gazelle",
    price: 2400000,
    sku: "A-0009-1",
    category: "adidas",
    images: ["images/Adidas/9.jpg", "images/Adidas/9-9.jpg"],
    colors: ["Xanh", "Trắng"],
    sizes: [39, 40, 41, 42],
    description: {
      text: "Adidas Gazelle - Biểu tượng thời trang từ những năm 60.",
      details: [
        "Upper da lộn cao cấp",
        "3 Sọc adidas truyền thống",
        "Đế gum bền bỉ",
        "Logo vàng đặc trưng",
        "Phong cách retro classic"
      ]
    }
  },
  {
    id: 30,
    name: "Adidas 4DFWD",
    price: 5500000,
    sku: "A-0010-1",
    category: "adidas",
    images: ["images/Adidas/10.jpg", "images/Adidas/10-10.jpg"],
    colors: ["Đen", "Xám"],
    sizes: [40, 41, 42, 43],
    description: {
      text: "Adidas 4DFWD - Công nghệ đế in 3D tiên tiến nhất.",
      details: [
        "Upper Primeknit+ co giãn",
        "Đế 4D in 3D độc đáo",
        "Công nghệ FWD-CELL",
        "Thiết kế hiện đại",
        "Trọng lượng siêu nhẹ"
      ]
    }
  },
  {
    id: 31,
    name: "Adidas Samba Classic",
    price: 2200000,
    sku: "A-0011-1",
    category: "adidas",
    images: ["images/Adidas/11.jpg", "images/Adidas/11-11.jpg"],
    colors: ["Đen", "Trắng"],
    sizes: [39, 40, 41, 42],
    description: {
      text: "Adidas Samba Classic - Giày bóng đá trong nhà huyền thoại.",
      details: [
        "Upper da thật cao cấp",
        "Đế gum chống trượt",
        "Logo 3 sọc truyền thống",
        "Thiết kế cổ điển",
        "Phù hợp mọi địa hình"
      ]
    }
  },
  {
    id: 32,
    name: "Adidas Terrex Swift R3",
    price: 3800000,
    sku: "A-0012-1",
    category: "adidas",
    images: ["images/Adidas/12.jpg", "images/Adidas/12-12.jpg"],
    colors: ["Xám", "Đen"],
    sizes: [40, 41, 42, 43],
    description: {
      text: "Adidas Terrex Swift R3 - Giày leo núi chuyên nghiệp.",
      details: [
        "Upper chống nước Gore-Tex",
        "Đế Continental™ bám địa hình",
        "Công nghệ Traxion",
        "Bảo vệ mũi giày",
        "Dây giày quick-lace"
      ]
    }
  },
  {
    id: 33,
    name: "Adidas Handball Spezial",
    price: 2600000,
    sku: "A-0013-1",
    category: "adidas",
    images: ["images/Adidas/13.jpg", "images/Adidas/13-13.jpg"],
    colors: ["Xanh navy", "Trắng"],
    sizes: [39, 40, 41, 42],
    description: {
      text: "Adidas Handball Spezial - Phong cách thể thao cổ điển.",
      details: [
        "Upper da lộn cao cấp",
        "Đế gum đặc trưng",
        "Logo vàng Spezial",
        "Thiết kế retro",
        "Đệm EVA nhẹ nhàng"
      ]
    }
  },
  {
    id: 34,
    name: "Adidas Response CL",
    price: 2900000,
    sku: "A-0014-1",
    category: "adidas",
    images: ["images/Adidas/14.jpg", "images/Adidas/14-14.jpg"],
    colors: ["Trắng", "Xám"],
    sizes: [40, 41, 42, 43],
    description: {
      text: "Adidas Response CL - Sự kết hợp giữa phong cách retro và hiện đại.",
      details: [
        "Upper mesh và da tổng hợp",
        "Đệm Cloudfoam",
        "Đế cao su bền bỉ",
        "Thiết kế chunky",
        "Chi tiết phản quang"
      ]
    }
  },
  {
    id: 35,
    name: "Adidas Dropstep",
    price: 2400000,
    sku: "A-0015-1",
    category: "adidas",
    images: ["images/Adidas/15.jpg", "images/Adidas/15-15.jpg"],
    colors: ["Đen", "Trắng"],
    sizes: [39, 40, 41, 42],
    description: {
      text: "Adidas Dropstep - Giày bóng rổ phong cách đường phố.",
      details: [
        "Upper da tổng hợp",
        "Đệm EVA nhẹ",
        "Cổ giày cao cổ điển",
        "Logo Three Stripes",
        "Đế cao su chống trượt"
      ]
    }
  },
  {
    id: 36,
    name: "Adidas Supernova",
    price: 3200000,
    sku: "A-0016-1",
    category: "adidas",
    images: ["images/Adidas/16.jpg", "images/Adidas/16-16.jpg"],
    colors: ["Xanh dương", "Đen"],
    sizes: [40, 41, 42, 43],
    description: {
      text: "Adidas Supernova - Giày chạy bộ hiệu năng cao.",
      details: [
        "Upper lưới thoáng khí",
        "Đệm Boost và Bounce",
        "Đế Continental™",
        "Công nghệ Torsion System",
        "Trọng lượng nhẹ"
      ]
    }
  },
  {
    id: 37,
    name: "Adidas Rivalry Low",
    price: 2500000,
    sku: "A-0017-1",
    category: "adidas",
    images: ["images/Adidas/17.jpg", "images/Adidas/17-17.jpg"],
    colors: ["Trắng", "Đỏ"],
    sizes: [39, 40, 41, 42],
    description: {
      text: "Adidas Rivalry Low - Phong cách bóng rổ cổ điển được tái hiện.",
      details: [
        "Upper da cao cấp",
        "Đệm OrthoLite",
        "Logo Three Stripes",
        "Thiết kế vintage",
        "Đế cao su bền bỉ"
      ]
    }
  },
  {
    id: 38,
    name: "Adidas ZX 2K Boost",
    price: 3500000,
    sku: "A-0018-1",
    category: "adidas",
    images: ["images/Adidas/18.jpg", "images/Adidas/18-18.jpg"],
    colors: ["Đen", "Xám"],
    sizes: [40, 41, 42, 43],
    description: {
      text: "Adidas ZX 2K Boost - Công nghệ Boost kết hợp phong cách ZX.",
      details: [
        "Upper mesh và TPU",
        "Đệm Boost đầy đủ",
        "Công nghệ Torsion",
        "Thiết kế futuristic",
        "Chi tiết phản quang"
      ]
    }
  }
];

// Hàm lọc sản phẩm theo category
function getProductsByCategory(category) {
  if (category === 'all') return products;
  return products.filter(p => p.category === category);
}