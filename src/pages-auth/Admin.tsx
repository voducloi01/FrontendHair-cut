import { Container } from '@mui/material';
import DashboardWrapper from '@/components/admin/organisms/DashboardWrapper/DashboardWrapper';

const Admin = () => {
  return (
    <Container id="admin">
      <DashboardWrapper>
        <img src="../Logo.png" style={{ height: '100%', width: '50%' }} />
      </DashboardWrapper>
    </Container>
  );
};

export default Admin;
