export interface ColumnProduct {
  id:
    | 'id'
    | 'productName'
    | 'price'
    | 'categoryID'
    | 'urlImg'
    | 'nameImg'
    | 'action';
  align?: 'left' | 'right' | 'center';
  minWidth?: number;
  label: string;
  width?: number;
  format?: (value: number) => string;
}

export const COL_PRODUCT: ColumnProduct[] = [
  {
    id: 'id',
    label: 'STT',
    minWidth: 10,
    width: 100,
    align: 'center',
  },
  {
    id: 'productName',
    label: 'Product Name',
    minWidth: 170,
    width: 100,
    align: 'center',
  },

  { id: 'price', label: 'Price', minWidth: 10, width: 100, align: 'center' },

  {
    id: 'categoryID',
    label: 'Category',
    minWidth: 10,
    width: 100,
    align: 'center',
  },
  {
    id: 'urlImg',
    label: 'Image',
    minWidth: 10,
    width: 100,
    align: 'center',
  },
  {
    id: 'nameImg',
    label: 'Image Name',
    minWidth: 150,
    width: 100,
    align: 'center',
  },
  {
    id: 'action',
    label: 'Action',
    minWidth: 10,
    width: 100,
    align: 'center',
  },
];

export interface ColumnUser {
  id?: 'id' | 'name' | 'email' | 'age' | 'phone' | 'role' | 'action';
  align?: 'left' | 'right' | 'center';
  minWidth?: number;
  label: string;
  width?: number;
  format?: (value: number) => string;
}

export const COL_USERS: readonly ColumnUser[] = [
  { id: 'id', label: 'ID', minWidth: 10, width: 100, align: 'center' },
  { id: 'name', label: 'Name', minWidth: 10, width: 150, align: 'center' },
  { id: 'email', label: 'Email', minWidth: 10, width: 200, align: 'center' },
  { id: 'age', label: 'Age', minWidth: 10, align: 'center' },
  { id: 'phone', label: 'Phone', minWidth: 10, align: 'center' },
  { id: 'role', label: 'Role', minWidth: 10, width: 100, align: 'center' },
  { id: 'action', label: 'Actions', minWidth: 10, width: 100, align: 'center' },
];
