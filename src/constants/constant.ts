import {
  ManageAccounts,
  CalendarMonth,
  ProductionQuantityLimits,
  Dashboard,
  SvgIconComponent,
} from '@mui/icons-material';

// Router
export const ROUTE_PATH = {
  index: '/',
  home: '/home',
  introduce: '/introduce',
  listPrice: '/listPrice',
  register: '/register',
  training: '/training',
  schedule_user: '/user-schedule',

  // Admin
  login: '/admin-login',
  dashboard: '/admin-dashboard',
  product: '/admin-product',
  schedule: '/admin-schedule',
  user: '/admin-user',
};

// Data header
export const DATA_HEADER = [
  { id: 1, name: 'TRANG CHỦ', routerName: '/' },
  { id: 2, name: 'GIỚI THIỆU SẢN PHẨM', routerName: '/introduce' },
  { id: 3, name: 'BẢNG GIÁ DỊCH VỤ', routerName: '/listprice' },
  { id: 4, name: 'ĐÀO TẠO', routerName: '/training' },
  { id: 5, name: 'ĐẶT LỊCH', routerName: '/user-schedule' },
  { id: 6, name: 'LIÊN HỆ', routerName: '' },
];

//data author
export const DATA_AUTHOR = [
  {
    id: 1,
    name: 'Login',
    routerName: '/login',
  },
  {
    id: 2,
    name: 'Register',
    routerName: '/register',
  },
];

//Data slide swiper
export type DataSlideType = {
  id: number;
  img: string;
};

export const DATA_SLIDE: DataSlideType[] = [
  {
    id: 1,
    img: 'slice3.png',
  },
  {
    id: 2,
    img: 'slice1.jpg',
  },
  {
    id: 3,
    img: 'slice2.png',
  },
];

//Data  introduce
export type DataIntroduceType = {
  id: number;
  img: string;
  title: string;
  description: string;
};

export const DATA_PRICE_LIST = [
  {
    id: 1,
    title: 'Cắt tóc (combo 6 bước)',
    price: [70000],
  },
  {
    id: 2,
    title: 'Cạo mặt',
    price: [10000],
  },
  {
    id: 3,
    title: 'Lột mụn',
    price: [30000],
  },
  {
    id: 4,
    title: 'Ráy Tai',
    price: [50000],
  },
  {
    id: 5,
    title: 'Đắp mặt nạ dưỡng da',
    price: [30000],
  },
  {
    id: 6,
    title: 'Gội đầu',
    price: [20000],
  },
  {
    id: 7,
    title: 'Uốn tóc',
    price: [150000, 250000],
  },
  {
    id: 8,
    title: 'Uốn tóc Premlock',
    price: [500000, 1000000],
  },
  {
    id: 9,
    title: 'Uốn tóc texture(Con sâu)',
    price: [300000, 450000],
  },
  {
    id: 10,
    title: ' Duỗi tóc',
    price: [250000],
  },
  {
    id: 11,
    title: 'Nhuộm màu 1 lần',
    price: [200000],
  },
  {
    id: 12,
    title: 'Nhuộm đen',
    price: [150000],
  },
  {
    id: 13,
    title: 'Nâng tông + Nhuộm',
    price: [270000],
  },
  {
    id: 14,
    title: 'Tẩy tóc lần 1 + Nhuộm ',
    price: [350000],
  },
  {
    id: 15,
    title: 'Tẩy tóc lần 2 + Nhuộm',
    price: [450000],
  },
  {
    id: 16,
    title: 'Tẩy tóc bạch kim',
    price: [500000, 700000],
  },
  {
    id: 17,
    title: 'Ép side',
    price: [70000, 150000],
  },
  {
    id: 18,
    title: 'Xả uốn tóc',
    price: [50000],
  },
];

export const DATA_COMBO = [
  {
    id: 1,
    title: 'COMBO VIP',
    price: 400000,
    image:
      'https://artbarbershop.com/wp-content/uploads/2021/04/icon-combo-vip.png',
  },
  {
    id: 2,
    title: 'COMBO THƯ GIÃN',
    price: 65000,
    image:
      'https://artbarbershop.com/wp-content/uploads/2021/04/icon-combo-goi-dau.png',
  },
  {
    id: 3,
    title: 'COMBO CẠO MẶT \n RÁY TAI + ĐÁNH MẮT',
    price: 85000,
    image:
      'https://artbarbershop.com/wp-content/uploads/2021/04/icon-cao-mat.png',
  },
];

// Data training

export type DataTrainingType = {
  id: number;
  icon: string;
  title: string;
};

export const DATA_INFORMATION: DataTrainingType[] = [
  { id: 1, icon: 'icon-next', title: 'Kỹ thuật sử dụng kéo ,dao cạo, lược.' },
  { id: 2, icon: 'icon-next', title: 'Kỹ thuật sử dụng tông đơ và cử .' },
  { id: 3, icon: 'icon-next', title: 'Kỹ năng FADE nhiều cấp độ .' },
  {
    id: 4,
    icon: 'icon-next',
    title:
      'Tất cả kiểu tóc cổ điển tới hiện đại như : Undercut , mohican , short quiff ,sidepart ,layer ...',
  },
  { id: 5, icon: 'icon-next', title: 'Kiến thức về hóa chất & Nhuộm' },
  {
    id: 6,
    icon: 'icon-next',
    title: 'Kỹ năng uốn như :Premlock , giấy bạc ...',
  },
  { id: 7, icon: 'icon-next', title: 'Kỹ năng pha + Nhuộm màu' },
  { id: 8, icon: 'icon-next', title: 'Kỹ năng giao tiếp khách hàng' },
];

// Data input register
type DataInputRegisterType = {
  id: number;
  name: String;
  type: 'text' | 'email' | 'password';
  value: 'name' | 'email' | 'password';
  required: boolean;
  onChangeRegister?: (
    e: React.ChangeEvent<HTMLInputElement>,
    value: 'name' | 'email' | 'password',
  ) => void;
};

export const DATA_INPUT_REGISTER: DataInputRegisterType[] = [
  {
    id: 1,
    name: 'Name',
    type: 'text',
    required: true,
    value: 'name',
  },
  { id: 2, name: 'Email', type: 'email', required: true, value: 'email' },
  {
    id: 3,
    name: 'Password',
    type: 'password',
    required: true,
    value: 'password',
  },
];

export interface DataDasBoardType {
  id: number;
  text?: string;
  router: string;
  icon: SvgIconComponent;
}

export const DATA_DASHBOARD: DataDasBoardType[] = [
  {
    id: 1,
    text: 'DEFAULT',
    router: '/admin-dashboard',
    icon: Dashboard,
  },
  {
    id: 2,
    text: 'MANAGER PRODUCT',
    router: '/admin-product',
    icon: ProductionQuantityLimits,
  },
  {
    id: 3,
    text: 'SCHEDULE',
    router: '/admin-schedule',
    icon: CalendarMonth,
  },
  {
    id: 4,
    text: 'MANAGER USER',
    router: '/admin-user',
    icon: ManageAccounts,
  },
];

export type DataDialogUserType = {
  id: string;
  type: 'text' | 'email';
  label: 'Name' | 'Email';
  value: 'name' | 'email';
  margin?: 'none' | 'dense' | 'normal';
  onChange?: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    value: 'name' | 'email' | 'role',
  ) => void;
};

export const DATA_DIALOG_USER: DataDialogUserType[] = [
  { id: '1', type: 'text', label: 'Name', value: 'name', margin: 'dense' },
  { id: '2', type: 'email', label: 'Email', value: 'email', margin: 'dense' },
];

export type DataDialogCreateUserType = {
  id: string;
  type: 'text' | 'email' | 'password' | 'number';
  label: string;
  value: 'name' | 'email' | 'password';
  margin?: 'none' | 'dense' | 'normal';
  autoComplete?: string;
};

export const DATA_DIALOG_CREATE_USER: DataDialogCreateUserType[] = [
  {
    id: '1',
    type: 'text',
    label: 'Name',
    value: 'name',
    margin: 'dense',
    autoComplete: undefined,
  },
  {
    id: '2',
    type: 'email',
    label: 'Email',
    value: 'email',
    margin: 'dense',
    autoComplete: undefined,
  },
  {
    id: '3',
    type: 'password',
    label: 'Password',
    value: 'password',
    margin: 'dense',
    autoComplete: 'off',
  },
];

export type DataDialogEditUserType = {
  id: string;
  type: 'text' | 'email' | 'number';
  label: string;
  value: 'name' | 'email' | 'role';
  margin?: 'none' | 'dense' | 'normal';
  autoComplete?: string;
};

export const DATA_DIALOG_EDIT_USER: DataDialogEditUserType[] = [
  {
    id: '1',
    type: 'text',
    label: 'Name',
    value: 'name',
    margin: 'dense',
    autoComplete: 'off',
  },
  {
    id: '2',
    type: 'email',
    label: 'Email',
    value: 'email',
    margin: 'dense',
    autoComplete: 'off',
  },
];

// type form login text field
export type TextFieldLoginType = {
  id: string;
  type: 'email' | 'password';
  label: string;
  value: 'email' | 'password';
  margin?: 'none' | 'dense' | 'normal' | undefined;
  autoComplete?: string | undefined;
};

// data text field login
export const TEXT_FIELD_LOGIN: TextFieldLoginType[] = [
  {
    id: '1',
    type: 'email',
    label: 'Email',
    value: 'email',
    margin: 'dense',
    autoComplete: undefined,
  },
  {
    id: '2',
    type: 'password',
    label: 'Password',
    value: 'password',
    margin: 'dense',
    autoComplete: 'off',
  },
];

// type form login text field
export type TextFieldProductType = {
  id: string;
  type: 'text' | 'number';
  label: string;
  value: 'productName' | 'price';
  margin?: 'none' | 'dense' | 'normal' | undefined;
  autoComplete?: string | undefined;
  classes: string;
};

// data field product
export const TEXT_FIELD_PRODUCT: TextFieldProductType[] = [
  {
    id: '1',
    type: 'text',
    label: 'Name Product',
    value: 'productName',
    margin: 'dense',
    autoComplete: 'off',
    classes: 'mt-2',
  },
  {
    id: '2',
    type: 'number',
    label: 'Price',
    value: 'price',
    margin: 'dense',
    autoComplete: 'off',
    classes: 'mt-4',
  },
];

type typeRole = {
  id: 1 | 2;
  name: 'Admin' | 'Staff';
};

export const ROLE: typeRole[] = [
  { id: 1, name: 'Staff' },
  { id: 2, name: 'Admin' },
];

export const ROLE_USER = { staff: 1, admin: 2 };

export type TYPE_DATA_SCHEDULE = {
  id: number;
  value: 'name' | 'email' | 'phone';
  label: string;
  type: 'number' | 'text' | 'email';
};

export const DATA_SCHEDULE: TYPE_DATA_SCHEDULE[] = [
  {
    id: 1,
    value: 'name',
    label: 'Name',
    type: 'text',
  },
  {
    id: 2,
    value: 'email',
    label: 'Email',
    type: 'email',
  },
  {
    id: 3,
    value: 'phone',
    label: 'Phone',
    type: 'number',
  },
];
