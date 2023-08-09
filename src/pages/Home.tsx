import Header from '@/components/atoms/Header/Header';
import HomeWrapper from '@/components/organisms/HomeWrapper/HomeWrapper';
import { DATA_SLIDE } from '@/constants/constant';

const HomePage = () => {
  return (
    <div id="home">
      <Header />
      <HomeWrapper slideData={DATA_SLIDE} />
    </div>
  );
};

export default HomePage;
