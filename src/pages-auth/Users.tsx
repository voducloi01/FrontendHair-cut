import { Container } from '@mui/material';
import DashboardWrapper from '@/components/admin/organisms/DashboardWrapper/DashboardWrapper';
import UsersWrapper from '@/components/admin/organisms/UsersWrapper/UsersWrapper';
import { useContext, useEffect, useState } from 'react';
import API from '@/services/axiosClient';
import { LoadingContext } from '@/context/LoadingContext';
import { AlertDialogContext } from '@/context/AlertDialogContext';
import _ from 'lodash';
import { UserType } from '@/api_type/Login/login';
import DialogUser from '@/components/admin/atoms/DialogUser/DialogUser';

const UserPage = () => {
  const preloader = useContext(LoadingContext);
  const alertDialog = useContext(AlertDialogContext);
  const [dataUsers, setDataUsers] = useState<UserType[]>([]);
  const [isOpenCreateUser, setIsOpenCreateUser] = useState<boolean>(false);

  useEffect(() => {
    getUSers();
  }, []);

  const getUSers = async () => {
    try {
      preloader.show();
      const response = await API.apiGetUsers();
      const { result } = response.data;
      setDataUsers(result);
    } catch (error) {
      const message = _.get(error, 'message', JSON.stringify(error));
      alertDialog.show(message);
    } finally {
      preloader.hidden();
    }
  };

  const onClickCreateUser = () => {
    setIsOpenCreateUser(true);
  };

  return (
    <Container id="users">
      <DashboardWrapper>
        <UsersWrapper
          dataUsers={dataUsers}
          onClickCreateUser={onClickCreateUser}
        />
      </DashboardWrapper>
      <DialogUser
        title="Create User"
        open={isOpenCreateUser}
        onClose={() => setIsOpenCreateUser(false)}
      />
    </Container>
  );
};

export default UserPage;
