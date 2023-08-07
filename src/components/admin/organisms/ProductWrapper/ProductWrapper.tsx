import { useEffect, useState } from 'react';
import API from '@/services/axiosClient';
import TableComponent from '@/components/molecules/TableComponent/TableComponent';
import { ColumnProduct, Product } from '@/Interface';

const columns: ColumnProduct[] = [
  { id: 'productName', label: 'Product Name' },

  { id: 'price', label: 'Price' },

  {
    id: 'categoryId',
    label: 'Category',
  },
  {
    id: 'urlImg',
    label: 'Image',
  },
  {
    id: 'nameImg',
    label: 'Image Name',
  },
];

export default function ProductWrapper() {
  const [product, setProduct] = useState<Product[]>([]);

  useEffect(() => {
    getProduct();
  }, []);

  const getProduct = () => {
    API.apiGetProduct()
      .then((res) => {
        const { data } = res.data;
        setProduct(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <h1 className="text_title">Manager Product</h1>
      <TableComponent />
    </div>
  );
}
