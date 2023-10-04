import {
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TablePagination,
  TableRow,
  TextField,
} from '@mui/material';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import HeaderTable from '../../atoms/HeaderTable/HeaderTable';
import { COL_PRODUCT } from '@/type/TableType/table_type';
import { DeleteForeverOutlined, EditOutlined } from '@mui/icons-material';
import './ProductWrapper.scss';
import DialogWrapper from '../../atoms/Dialog';
import SelectField from '@/components/atoms/SelectField';
import InputUpload from '@/components/atoms/InputUpload/InputUpload';
import { FormikProps, FormikProvider } from 'formik';
import { ParamProduct, ProductType } from '@/api_type/Product';
import { TEXT_FIELD_PRODUCT } from '@/constants/constant';
import { CategoryType } from '@/api_type/Category';

interface ProductWrapperProps {
  validationProduct: FormikProps<ParamProduct>;
  product: ProductType[];
  onClickSubmit: () => void;
  category: CategoryType[];
}

//TODO
const ProductWrapper = ({
  product,
  validationProduct,
  category,
}: ProductWrapperProps) => {
  const [dialog, setDialog] = useState<boolean>(false);
  const [page, setPage] = useState<number>(0);
  const [rowsPerPage, setRowsPerPage] = useState<number>(10);
  const { t } = useTranslation();
  const [selectedImage, setSelectedImage] = useState<string>('');

  const handleChangePage = (_: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleCreateProduct = () => {
    setDialog(true);
  };

  const handleCancelDialog = () => {
    setDialog(false);
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      const file = files[0];
      const imageUrl = URL.createObjectURL(file);
      setSelectedImage(imageUrl);
    }
  };

  const handleClose = () => {
    setSelectedImage('');
  };

  return (
    <div className="product-wrapper">
      <div className="product-wrapper__header mx-2">
        <h1 className="text_title">Manager Product</h1>
        <Button
          color="success"
          size="medium"
          variant="contained"
          onClick={handleCreateProduct}
        >
          {t('product.create')}
        </Button>
      </div>
      <DialogWrapper
        maxWidth="sm"
        open={dialog}
        title="Create Product"
        onClose={handleCancelDialog}
        onClickSave={validationProduct.handleSubmit}
      >
        {TEXT_FIELD_PRODUCT.map((e) => {
          return (
            <TextField
              className="product-wrapper__input"
              key={e.id}
              fullWidth
              id={e.value}
              label={e.label}
              variant="outlined"
              onChange={validationProduct.handleChange}
              error={
                validationProduct.touched[e.value] &&
                Boolean(validationProduct.errors[e.value])
              }
              helperText={
                validationProduct.touched[e.value] &&
                validationProduct.errors[e.value]
              }
            />
          );
        })}
        <FormikProvider value={validationProduct}>
         <SelectField label="Category" name="category" options={category} />
        </FormikProvider>
        <InputUpload
          urlImage={selectedImage}
          handleFileChange={handleFileChange}
          classes="mt-4"
          handleClose={handleClose}
        />
      </DialogWrapper>
      <Paper
        sx={{
          width: '100%',
          overflow: 'hidden',
          borderRadius: 2,
          border: 'none',
        }}
      >
        <TableContainer sx={{ maxHeight: 480 }}>
          <Table stickyHeader sx={{ m: 0 }}>
            <HeaderTable columns={COL_PRODUCT} />
            <TableBody>
              {product
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((product, index) => {
                  return (
                    <TableRow
                      hover
                      role="checkbox"
                      tabIndex={-1}
                      key={product.id.toString()}
                    >
                      {COL_PRODUCT.map((column) => {
                        const value = product[column.id];
                        return (
                          <TableCell
                            key={column.id}
                            align={column.align}
                            className="table"
                          >
                            {column.id === 'action' ? (
                              <div className="product-wrapper__action">
                                <div className="product-wrapper__action__edit">
                                  <EditOutlined />
                                </div>
                                <div className="product-wrapper__action__delete">
                                  <DeleteForeverOutlined />
                                </div>
                              </div>
                            ) : column.id === 'id' ? (
                              index + 1
                            ) : column.id === 'urlImg' ? (
                              <img
                                className="product-wrapper__action__image"
                                alt="anh dep"
                                src={product.urlImg}
                                height={100}
                                width={100}
                              />
                            ) : (
                              value
                            )}
                          </TableCell>
                        );
                      })}
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={product.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </div>
  );
};

export default ProductWrapper;
