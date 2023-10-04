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
  name_product: string;
  price: number;
  category: number;
};

export type ProductPResponseType = {
  result: ProductType[];
  message: string;
};
