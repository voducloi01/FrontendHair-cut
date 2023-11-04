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
import { useContext, useState } from 'react';
import { useTranslation } from 'react-i18next';
import HeaderTable from '../../atoms/HeaderTable/HeaderTable';
import { COL_PRODUCT } from '@/type/TableType/table_type';
import { DeleteForeverOutlined, EditOutlined } from '@mui/icons-material';
import './ProductWrapper.scss';
import DialogWrapper from '../../atoms/Dialog';
import InputUpload from '@/components/atoms/InputUpload/InputUpload';
import { FormikProvider, useFormik } from 'formik';
import { ParamProduct, ProductType } from '@/api_type/Product';
import { TEXT_FIELD_PRODUCT } from '@/constants/constant';
import SelectField, { TypeOption } from '@/components/atoms/SelectField';
import { validationProductSchema } from '@/validations/product_validation';
import { LoadingContext } from '@/context/LoadingContext';
import { AlertDialogContext } from '@/context/AlertDialogContext';
import API from '@/services/axiosClient';
import _ from 'lodash';
import { formatPrice } from '@/utils';
import DialogQuestions from '../../atoms/DialogQuestions/DialogQuestions';

interface ProductWrapperProps {
  product: ProductType[];
  category: TypeOption[];
  getProduct: () => void;
}

//TODO
const ProductWrapper = ({
  product,
  category,
  getProduct,
}: ProductWrapperProps) => {
  const [dialog, setDialog] = useState<boolean>(false);
  const [page, setPage] = useState<number>(0);
  const [rowsPerPage, setRowsPerPage] = useState<number>(10);
  const { t } = useTranslation();
  const [typeAction, setTypeAction] = useState<boolean>(false);
  const [idProduct, setIdProduct] = useState<number>(0);
  const [selectedImage, setSelectedImage] = useState<string>('');
  const [isOpenDelete, setIsOpenDelete] = useState<boolean>(false);
  const preloader = useContext(LoadingContext);
  const alertDialog = useContext(AlertDialogContext);

  const handleChangePage = (_: unknown, newPage: number) => {
    setPage(newPage);
  };

  const formik = useFormik({
    initialValues: {
      productName: '',
      price: 0,
      categoryId: 0,
      image: '',
    },
    validationSchema: validationProductSchema,
    onSubmit: (values: ParamProduct) => HandleCreateProduct(values),
  });

  const HandleCreateProduct = async (values: ParamProduct) => {
    try {
      preloader.show();
      const formData = new FormData();
      formData.append('productName', values.productName);
      formData.append('price', values.price.toString());
      formData.append('categoryId', values.categoryId.toString());
      formData.append('image', values.image);
      if (typeAction) {
        const res = await API.apiCreateProduct(formData);
        const { message } = res.data;
        alertDialog.show(message, true);
      } else {
        const res = await API.apiUpdateProduct(formData, idProduct);
        const { message } = res.data;
        alertDialog.show(message, true);
      }
      getProduct();
      formik.resetForm();
      setSelectedImage('');
    } catch (error) {
      const message = _.get(error, 'message', JSON.stringify(error));
      alertDialog.show(message, false);
    } finally {
      setDialog(false);
      preloader.hidden();
    }
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleCreate = () => {
    setDialog(true);
    setTypeAction(true);
  };

  const handleFileChange = async (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      const file = files[0];
      const imageUrl = URL.createObjectURL(file);
      setSelectedImage(imageUrl);
      formik.setFieldValue('image', file);
    }
  };

  const handleEdit = (product: ProductType) => {
    const initialValues = {
      productName: product.productName,
      price: product.price,
      categoryId: product.categoryID,
      image: product.urlImg,
    };

    formik.setValues(initialValues);
    setDialog(true);
    setTypeAction(false);
    setIdProduct(product.id);
    setSelectedImage(product.urlImg);
  };

  const handleDelete = async (product: ProductType) => {
    setIdProduct(product.id);
    setIsOpenDelete(true);
  };

  const handleAgreeDelete = async () => {
    try {
      preloader.show();
      const res = await API.apiDeleteProduct(idProduct);
      getProduct();
      const { message } = res.data;
      setIsOpenDelete(false);
      alertDialog.show(message, true);
    } catch (error) {
      const message = _.get(error, 'message', JSON.stringify(error));
      alertDialog.show(message, false);
    } finally {
      preloader.hidden();
    }
  };

  const handleCloseDialog = () => {
    setDialog(false);
    setSelectedImage('');
    formik.resetForm();
  };

  return (
    <div className="product-wrapper">
      <div className="product-wrapper__header mx-2">
        <h1 className="text_title">Manager Product</h1>
        <Button
          color="success"
          size="medium"
          variant="contained"
          onClick={handleCreate}
        >
          {t('button.create')}
        </Button>
      </div>
      <DialogWrapper
        maxWidth="sm"
        open={dialog}
        title={typeAction ? t('button.create') : t('button.edit')}
        onClose={handleCloseDialog}
        onClickSave={formik.handleSubmit}
      >
        {TEXT_FIELD_PRODUCT.map((e) => {
          return (
            <TextField
              className="product-wrapper__input"
              type={e.type}
              value={formik.values[e.value] || ''}
              key={e.id}
              fullWidth
              id={e.value}
              label={e.label}
              variant="outlined"
              onChange={formik.handleChange}
              error={formik.touched[e.value] && Boolean(formik.errors[e.value])}
              helperText={formik.touched[e.value] && formik.errors[e.value]}
              margin="dense"
            />
          );
        })}

        <FormikProvider value={formik}>
          <SelectField
            value={formik.values['categoryId'] || ''}
            label="Category"
            name="categoryId"
            options={category}
          />
        </FormikProvider>

        <InputUpload
          urlImage={selectedImage}
          handleFileChange={handleFileChange}
          classes="mt-4"
          handleClose={() => setSelectedImage('')}
        />
        {formik.touched.image && formik.errors.image && (
          <div style={{ color: 'red' }}>{formik.errors.image}</div>
        )}
      </DialogWrapper>

      <DialogQuestions
        open={isOpenDelete}
        title={'Delete'}
        content={`Do you want delete Product ID: ${idProduct} ?`}
        handleClose={() => setIsOpenDelete(false)}
        handleAgree={handleAgreeDelete}
      />

      <Paper
        sx={{
          width: '100%',
          overflow: 'hidden',
          borderRadius: 2,
          border: 'none',
          height: '100%',
        }}
      >
        <TableContainer sx={{ maxHeight: 700 }}>
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
                                <div
                                  onClick={() => handleEdit(product)}
                                  className="product-wrapper__action__edit"
                                >
                                  <EditOutlined />
                                </div>
                                <div
                                  onClick={() => handleDelete(product)}
                                  className="product-wrapper__action__delete"
                                >
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
                            ) : column.id === 'categoryID' ? (
                              category.map((e) => {
                                return (
                                  <div key={e.id}>
                                    {e.id === product.categoryID ? e.name : ''}
                                  </div>
                                );
                              })
                            ) : column.id === 'price' ? (
                              formatPrice(product.price)
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
