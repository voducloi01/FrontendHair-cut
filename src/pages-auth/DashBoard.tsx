import { Container } from '@mui/material';
import DashboardWrapper from '@/components/admin/organisms/DashboardWrapper/DashboardWrapper';

const DashBoard = () => {
  const containerStyle = {
    height: '100%',
    width: '100%',
    backgroundImage: "url('../Logo.png')",
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    // Các thuộc tính CSS khác tùy theo nhu cầu của bạn
  };
  return (
    <Container id="admin-dashboard">
      <DashboardWrapper>
        <div style={containerStyle}></div>
      </DashboardWrapper>
    </Container>
  );
};

export default DashBoard;
