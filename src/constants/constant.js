// Router
export const ROUTE_PATH = {
  index: '/',
  home: '/home',
  introduce: '/introduce',
  listprice: '/listprice',
  login: '/admin/login',
  register: '/register',
  training: '/training',
  product: '/admin/product'
};

// Data header
export const DATA_HEADER = [
  { id: 1, name: 'TRANG CHỦ', routerName: '/' },
  { id: 2, name: 'GIỚI THIỆU', routerName: '/introduce' },
  { id: 3, name: 'BẢNG GIÁ DỊCH VỤ', routerName: '/listprice' },
  { id: 4, name: 'ĐÀO TẠO', routerName: '/training' },
  { id: 5, name: 'BLOG' },
  { id: 6, name: 'LIÊN HỆ' }
];

//data author
export const DATA_AUTHOR = [
  {
    id: 1,
    name: 'Login',
    routerName: '/login'
  },
  {
    id: 2,
    name: 'Register',
    routerName: '/register'
  }
];

//Data Slide swiper
export const DATA_SLIDE = [
  {
    id: 1,
    img: 'https://static.thehoneycombers.com/wp-content/uploads/sites/2/2021/04/Barber-shops-in-Singapore.png'
  },
  {
    id: 2,
    img: 'https://sgp1.digitaloceanspaces.com/tz-mag-ph/wp-content/uploads/2022/04/060604045656/Dapper-Dons-Barbershop.png'
  },
  {
    id: 3,
    img: 'https://previews.123rf.com/images/kostsov/kostsov1801/kostsov180100081/93958941-modern-barbershop-interior-with-chairs-3d-rendering.jpg'
  }
];

export const DATA_INTRODUCE = [
  {
    id: 1,
    img: 'https://storage.30shine.com/ResourceWeb/data/images/hanh-trinh-toa-sang/30shine-toc-mullet.jpg',
    title: ' Phúc lột xác mái tóc để suốt bao năm giúp ngoại hình mới cực cuốn hút',
    decription:
      'Thay đổi kiểu tóc đã để suốt bao năm là một quyết định vô cùng khó khăn nhưng Phúc đã vượt qua nỗi sợ đó và tạo một kiểu tóc mới hoàn toàn '
  },
  {
    id: 2,
    img: 'https://storage.30shine.com/ResourceWeb/data/images/hanh-trinh-toa-sang/30shine-toc-mullet.jpg',
    title: ' Phúc lột xác mái tóc để suốt bao năm giúp ngoại hình mới cực cuốn hút',
    decription:
      'Thay đổi kiểu tóc đã để suốt bao năm là một quyết định vô cùng khó khăn nhưng Phúc đã vượt qua nỗi sợ đó và tạo một kiểu tóc mới hoàn toàn '
  }
];

export const DATA_PRICELIST = [
  {
    id: 1,
    title: 'Cắt tóc (combo 6 bước)',
    price: [70000]
  },
  {
    id: 2,
    title: 'Cạo mặt',
    price: [10000]
  },
  {
    id: 3,
    title: 'Lột mụn',
    price: [30000]
  },
  {
    id: 4,
    title: 'Ráy Tai',
    price: [50000]
  },
  {
    id: 5,
    title: 'Đắp mặt nạ dưỡng da',
    price: [30000]
  },
  {
    id: 6,
    title: 'Gội đầu',
    price: [20000]
  },
  {
    id: 7,
    title: 'Uốn tóc',
    price: [150000, 250000]
  },
  {
    id: 8,
    title: 'Uốn tóc Premlock',
    price: [500000, 1000000]
  },
  {
    id: 9,
    title: 'Uốn tóc texture(Con sâu)',
    price: [300000, 450000]
  },
  {
    id: 10,
    title: ' Duỗi tóc',
    price: [250000]
  },
  {
    id: 11,
    title: 'Nhuộm màu 1 lần',
    price: [200000]
  },
  {
    id: 12,
    title: 'Nhuộm đen',
    price: [150000]
  },
  {
    id: 13,
    title: 'Nâng tông + Nhuộm',
    price: [270000]
  },
  {
    id: 14,
    title: 'Tẩy tóc lần 1 + Nhuộm ',
    price: [350000]
  },
  {
    id: 15,
    title: 'Tẩy tóc lần 2 + Nhuộm',
    price: [450000]
  },
  {
    id: 16,
    title: 'Tẩy tóc bạch kim',
    price: [500000, 700000]
  },
  {
    id: 17,
    title: 'Ép side',
    price: [70000, 150000]
  },
  {
    id: 18,
    title: 'Xả uốn tóc',
    price: [50000]
  }
];

export const DATA_COMBO = [
  {
    id: 1,
    title: 'COMBO VIP',
    price: 400000,
    image: 'https://artbarbershop.com/wp-content/uploads/2021/04/icon-combo-vip.png'
  },
  {
    id: 2,
    title: 'COMBO THƯ GIÃN',
    price: 65000,
    image: 'https://artbarbershop.com/wp-content/uploads/2021/04/icon-combo-goi-dau.png'
  },
  {
    id: 3,
    title: 'COMBO CẠO MẶT + RÁY TAI + ĐÁNH MẮT',
    price: 85000,
    image: 'https://artbarbershop.com/wp-content/uploads/2021/04/icon-cao-mat.png'
  }
];

export const DATA_INFORMATION = [
  { id: 1, icon: 'icon-next', title: 'Kỹ thuật sử dụng kéo ,dao cạo, lược.' },
  { id: 2, icon: 'icon-next', title: 'Kỹ thuật sử dụng tông đơ và cử .' },
  { id: 3, icon: 'icon-next', title: 'Kỹ năng FADE nhiều cấp độ .' },
  {
    id: 4,
    icon: 'icon-next',
    title:
      'Tất cả kiểu tóc cổ điển tới hiện đại như : Undercut , mohican , short quiff ,sidepart ,layer ...'
  },
  { id: 5, icon: 'icon-next', title: 'Kiến thức về hóa chất & Nhuộm' },
  { id: 6, icon: 'icon-next', title: 'Kỹ năng uốn như :Premlock , giấy bạc ...' },
  { id: 7, icon: 'icon-next', title: 'Kỹ năng pha + Nhuộm màu' },
  { id: 8, icon: 'icon-next', title: 'Kỹ năng giao tiếp khách hàng' }
];

export const ENV = {
  host : 'http://localhost:3000'
}
