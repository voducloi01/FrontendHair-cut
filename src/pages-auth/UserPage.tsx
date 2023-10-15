import { Container, IconButton, TextField } from '@mui/material';
import DashboardWrapper from '@/components/admin/organisms/DashboardWrapper/DashboardWrapper';
import UsersWrapper from '@/components/admin/organisms/UsersWrapper/UsersWrapper';
import { useContext, useEffect, useState } from 'react';
import API from '@/services/axiosClient';
import { LoadingContext } from '@/context/LoadingContext';
import { AlertDialogContext } from '@/context/AlertDialogContext';
import _ from 'lodash';
import { UserCreate, UserEdit, UserType } from '@/api_type/Login';
import DialogWrapper from '@/components/admin/atoms/Dialog';
import DialogQuestions from '@/components/admin/atoms/DialogQuestions/DialogQuestions';
import {
  DATA_DIALOG_CREATE_USER,
  DATA_DIALOG_EDIT_USER,
  ROLE,
} from '@/constants/constant';
import { FormikProvider, useFormik } from 'formik';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import {
  validationCreateUserSchema,
  validationEditUserSchema,
} from '@/validations/auth_validation';
import SelectField from '@/components/atoms/SelectField';

const UserPage = () => {
  const preloader = useContext(LoadingContext);
  const alertDialog = useContext(AlertDialogContext);

  // validation create user hook
  const validationCreateUser = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
    },
    validationSchema: validationCreateUserSchema,
    onSubmit: (values: UserCreate) => handleSaveCreate(values),
  });

  // validation edit hook
  const validationEditUser = useFormik({
    initialValues: {
      name: '',
      email: '',
      role: 0,
    },
    validationSchema: validationEditUserSchema,
    onSubmit: (values: UserEdit) => handleClickEditSave(values),
  });

  const [dataUsers, setDataUsers] = useState<UserType[]>([]);
  const [isOpenEdit, setIsOpenEdit] = useState<boolean>(false);
  const [isOpenCreate, setIsOpenCreate] = useState<boolean>(false);
  const [isShowPassword, setIsShowPassword] = useState<boolean>(false);
  const [idUser, setIdUser] = useState<number>(0);
  const [dataDelete, setDataDelete] = useState<{ id: string; name: string }>({
    id: '',
    name: '',
  });
  const [isOpenDelete, setIsOpenDelete] = useState<boolean>(false);

  // get all user
  useEffect(() => {
    getUSers();
  }, []);

  // get all user
  const getUSers = async () => {
    try {
      preloader.show();
      const response = await API.apiGetUsers();
      const { result } = response.data;
      setDataUsers(result);
    } catch (error) {
      const message = _.get(error, 'message', JSON.stringify(error));
      alertDialog.show(message, false);
    } finally {
      preloader.hidden();
    }
  };

  // click edit show dialog get get value
  const onClickEdit = (user: UserType) => {
    validationEditUser.setFieldValue('name', user.name);
    validationEditUser.setFieldValue('email', user.email);
    validationEditUser.setFieldValue('role', user.role);
    setIdUser(Number(user.id));
    setIsOpenEdit(true);
  };

  // Click save edit
  const handleClickEditSave = async (value: UserEdit) => {
    try {
      preloader.show();
      const updateUser = await API.apiUpdateUser(idUser, value);
      const { message } = updateUser.data;
      await getUSers();
      setIsOpenEdit(false);
      alertDialog.show(message, true);
    } catch (error) {
      const message = _.get(error, 'message', JSON.stringify(error));
      alertDialog.show(message, false);
    } finally {
      preloader.hidden();
    }
  };

  // handle show dialog create
  const onClickCreate = () => {
    setIsOpenCreate(true);
  };

  // handle show dialog delete
  const onClickDelete = (user: UserType) => {
    setDataDelete({ id: user.id, name: user.name });
    setIsOpenDelete(true);
  };

  // handle agree delete
  const handleAgreeDelete = async () => {
    try {
      preloader.show();
      const response = await API.apiDeleteUser(Number(dataDelete.id));
      await getUSers();
      const { message } = response.data;
      setIsOpenDelete(false);
      alertDialog.show(message, true);
    } catch (error) {
      const message = _.get(error, 'message', JSON.stringify(error));
      alertDialog.show(message, false);
    } finally {
      preloader.hidden();
    }
  };

  // Handle Create new user
  const handleSaveCreate = async (value: UserCreate) => {
    try {
      preloader.show();
      const response = await API.apiCreateUser(value);
      const { message } = response.data;
      await getUSers();
      setIsOpenCreate(false);
      alertDialog.show(message, true);
    } catch (error) {
      const message = _.get(error, 'message', JSON.stringify(error));
      alertDialog.show(message, false);
    } finally {
      preloader.hidden();
    }
  };

  return (
    <Container id="users">
      <DashboardWrapper>
        <UsersWrapper
          onClickCreate={onClickCreate}
          onClickDelete={(user) => onClickDelete(user)}
          onClickEdit={(user) => onClickEdit(user)}
          dataUsers={dataUsers ?? []}
        />
      </DashboardWrapper>

      <DialogQuestions
        open={isOpenDelete}
        title={'Delete'}
        content={`Do you want delete user: ${dataDelete.name} ?`}
        handleClose={() => setIsOpenDelete(false)}
        handleAgree={handleAgreeDelete}
      />

      <DialogWrapper
        maxWidth="sm"
        onClickSave={validationEditUser.handleSubmit}
        title={'Edit User'}
        open={isOpenEdit}
        onClose={() => setIsOpenEdit(false)}
      >
        {DATA_DIALOG_EDIT_USER.map((user) => {
          return (
            <TextField
              error={
                validationEditUser.touched[user.value] &&
                !!validationEditUser.errors[user.value]
              }
              helperText={
                validationEditUser.touched[user.value] &&
                validationEditUser.errors[user.value]
              }
              key={user.id}
              sx={{ pb: 1 }}
              margin={user.margin}
              id={user.value}
              label={user.label}
              fullWidth
              autoComplete={user.autoComplete}
              onChange={validationEditUser.handleChange}
              value={validationEditUser.values[user.value] || ''}
            />
          );
        })}
        <FormikProvider value={validationEditUser}>
          <SelectField
            value={validationEditUser.values['role'] || ''}
            label="Role"
            name="role"
            options={ROLE}
          />
        </FormikProvider>
      </DialogWrapper>

      <DialogWrapper
        maxWidth="sm"
        onClickSave={validationCreateUser.handleSubmit}
        title={'Create User'}
        open={isOpenCreate}
        onClose={() => setIsOpenCreate(false)}
      >
        {DATA_DIALOG_CREATE_USER.map((user) => {
          return (
            <TextField
              error={
                validationCreateUser.touched[user.value] &&
                !!validationCreateUser.errors[user.value]
              }
              helperText={
                validationCreateUser.touched[user.value] &&
                validationCreateUser.errors[user.value]
              }
              InputProps={{
                endAdornment: user.type === 'password' && (
                  <IconButton
                    onClick={() => setIsShowPassword(!isShowPassword)}
                    edge="end"
                  >
                    {isShowPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                ),
              }}
              key={user.id}
              sx={{ pb: 1 }}
              margin={user.margin}
              id={user.id}
              label={user.label}
              type={
                user.type === 'password'
                  ? isShowPassword
                    ? 'text'
                    : 'password'
                  : user.type
              }
              fullWidth
              autoComplete={user.autoComplete}
              {...validationCreateUser.getFieldProps(user.value)}
            />
          );
        })}
      </DialogWrapper>
    </Container>
  );
};

export default UserPage;

