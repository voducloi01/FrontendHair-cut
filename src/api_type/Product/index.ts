export type ProductType = {
  id: number;
  productName: string;
  price: number;
  categoryID: number;
  urlImg: string;
  nameImg: string;
  action?: undefined;
};

export type ParamProduct = {
  productName: string;
  price: number;
  categoryId: number;
  image: File | string;
};

export type ProductPResponseType = {
  result: ProductType[];
  message: string;
};
