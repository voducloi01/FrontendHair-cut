import TableComponent from '@/components/molecules/TableComponent/TableComponent';
import { ColumnProduct, DataProductType } from '@/type';
import { Button } from '@mui/material';
import { useState } from 'react';
import DialogCreateProduct from '../dialogProduct';
import { useTranslation } from 'react-i18next';

//TODO
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

interface ProductWrapperProps {
  product: DataProductType[];
}

//TODO
const ProductWrapper = ({ product }: ProductWrapperProps) => {
  const [dialog, setDialog] = useState<boolean>(false);
  const { t } = useTranslation();

  const handleCreateProduct = () => {
    setDialog(true);
  };

  const handleCancelDialog = () => {
    setDialog(false);
  };

  const handleSubmit = () => {
    console.log(123);
  };

  return (
    <div>
      <h1 className="text_title">Manager Product</h1>
      <div>
        <Button
          color="success"
          size="medium"
          variant="contained"
          onClick={handleCreateProduct}
        >
          {t('product.create')}
        </Button>
      </div>
      <DialogCreateProduct
        isDialog={dialog}
        handleCancel={handleCancelDialog}
        handleSubmit={handleSubmit}
      />
      <TableComponent />
    </div>
  );
};

export default ProductWrapper;
