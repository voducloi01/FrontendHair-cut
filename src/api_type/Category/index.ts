import { ProductType } from '../Product';

export type CategoryType = {
  id: string;
  categoryName: string;
  description: string;
  products: ProductType[];
};

export type GetAllCategoryResponse = {
  result: CategoryType[];
  message: string;
};
