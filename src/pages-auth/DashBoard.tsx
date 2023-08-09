import { Container } from '@mui/material';
import DashboardWrapper from '@/components/admin/organisms/DashboardWrapper/DashboardWrapper';

const DashBoard = () => {
  return (
    <Container id="admin-dashboard">
      <DashboardWrapper>
        <img src="../Logo.png" style={{ height: '100%', width: '50%'}} />
      </DashboardWrapper>
    </Container>
  );
};

export default DashBoard;
