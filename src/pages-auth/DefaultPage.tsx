import { Container } from '@mui/material';
import DashboardWrapper from '@/components/admin/organisms/DashboardWrapper/DashboardWrapper';

const DefaultPage = () => {
  return (
    <Container id="default-page">
      <DashboardWrapper>
        <div className='mt-4' style={{display:'flex', alignItems:'center', justifyContent:'center'}}><img width={650} height={600} src="Logo.png" /></div>
      </DashboardWrapper>
    </Container>
  );
};

export default DefaultPage;
