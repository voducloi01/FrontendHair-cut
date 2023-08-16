export interface ColumnProduct {
  id: 'id' | 'name';
  align?: 'left' | 'right' | 'center';
  minWidth?: number;
  label: string;
  format?: (value: number) => string;
}

export interface ColumnUser {
  id: 'id' | 'name' | 'email' | 'age' | 'phone' | 'role';
  align?: 'left' | 'right' | 'center';
  minWidth?: number;
  label: string;
  format?: (value: number) => string;
}

export const COL_USERS: readonly ColumnUser[] = [
  { id: 'id', label: 'ID', minWidth: 10, align: 'center' },
  { id: 'name', label: 'Name', minWidth: 10, align: 'center' },
  { id: 'email', label: 'Email', minWidth: 10, align: 'center' },
  { id: 'age', label: 'Age', minWidth: 10, align: 'center' },
  { id: 'phone', label: 'Phone', minWidth: 10, align: 'center' },
  { id: 'role', label: 'Role', minWidth: 10, align: 'center' },
];
