import TableComponent from '@/components/molecules/TableComponent/TableComponent';
import { ColumnProduct, Product } from '@/Interface';

// coloum of product
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

interface DataProp {
  product: Product[];
}

const ProductWrapper = ({ product }: DataProp) => {
  return (
    <div>
      <h1 className="text_title">Manager Product</h1>
      <TableComponent />
    </div>
  );
};

export default ProductWrapper;
