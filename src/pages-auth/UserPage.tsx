import {
  Box,
  Container,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
} from '@mui/material';
import DashboardWrapper from '@/components/admin/organisms/DashboardWrapper/DashboardWrapper';
import UsersWrapper from '@/components/admin/organisms/UsersWrapper/UsersWrapper';
import { useContext, useEffect, useState } from 'react';
import API from '@/services/axiosClient';
import { LoadingContext } from '@/context/LoadingContext';
import { AlertDialogContext } from '@/context/AlertDialogContext';
import _ from 'lodash';
import { UserType } from '@/api_type/Login/login';
import DialogUser from '@/components/admin/atoms/DialogUser/DialogUser';
import DialogQuestions from '@/components/admin/atoms/DialogQuestions/DialogQuestions';
import { DATA_DIALOG_USER } from '@/constants/constant';

const UserPage = () => {
  const preloader = useContext(LoadingContext);
  const alertDialog = useContext(AlertDialogContext);
  const [dataUsers, setDataUsers] = useState<UserType[]>([]);
  const [isOpenEdit, setIsOpenEdit] = useState<boolean>(false);
  const [dataDelete, setDataDelete] = useState<{ id: string; name: string }>({
    id: '',
    name: '',
  });
  const [isOpenDelete, setIsOpenDelete] = useState<boolean>(false);
  const [valueForm, setValueForm] = useState<{
    id: string;
    name: string;
    email: string;
    phone: number;
    role: number;
  }>({
    id: '',
    name: '',
    email: '',
    phone: 0,
    role: 0,
  });

  // handle change value and select value
  const handleChangeValue = (
    e:
      | React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
      | SelectChangeEvent<number>,
    fieldName: string,
  ) => {
    setValueForm((prevFormLogin) => ({
      ...prevFormLogin,
      [fieldName]: e.target.value,
    }));
  };

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
    setValueForm({
      id: user.id,
      name: user.name,
      email: user.email,
      role: user.role,
      phone: 0,
    });
    setIsOpenEdit(true);
  };

  // Click save edit
  const handleClickEditSave = async () => {
    try {
      preloader.show();
      const updateUser = await API.apiUpdateUser(
        Number(valueForm.id),
        valueForm,
      );
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

  return (
    <Container id="users">
      <DashboardWrapper>
        <UsersWrapper
          onClickDelete={(user) => onClickDelete(user)}
          onClickEdit={(user) => onClickEdit(user)}
          dataUsers={dataUsers ?? []}
        />
      </DashboardWrapper>
      <DialogUser
        oncClickSave={handleClickEditSave}
        title={'Edit User'}
        open={isOpenEdit}
        onClose={() => setIsOpenEdit(false)}
      >
        {DATA_DIALOG_USER.map((user) => {
          return (
            <TextField
              key={user.id}
              sx={{ pb: 2 }}
              margin="dense"
              id={user.value}
              label={user.label}
              type={user.type}
              fullWidth
              value={valueForm[user.value]}
              onChange={(e) => handleChangeValue(e, user.value)}
            />
          );
        })}
        <Box sx={{ minWidth: 400 }}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Role</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={valueForm.role}
              onChange={(e) => handleChangeValue(e, 'role')}
              label="Role"
            >
              <MenuItem value={1}>Staff</MenuItem>
              <MenuItem value={0}>Admin</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </DialogUser>
      <DialogQuestions
        open={isOpenDelete}
        title={'Delete'}
        content={`Do you want delete user: ${dataDelete.name} ?`}
        handleClose={() => setIsOpenDelete(false)}
        handleAgree={handleAgreeDelete}
      />
    </Container>
  );
};

export default UserPage;
