import { Box } from '@mui/material';
import Header from '@/components/atoms/Header/Header';
import HomeWrapper from '@/components/organisms/HomeWrapper/HomeWrapper';
import { DATA_SLIDE } from '@/constants/constant';

const HomePage = () => {
  return (
    <Box id="home">
      <Header />
      <HomeWrapper slideData={DATA_SLIDE} />
    </Box>
  );
};

export default HomePage;
