import Header from '@/components/atoms/Header/Header';
import IntroduceWrapper from '@/components/organisms/IntroduceWrapper/IntroduceWrapper';
import { DATA_INTRODUCE } from '@/constants/constant';
import TitleIntroduce from '@/components/organisms/TitleIntroduce/TitleIntroduce';

const Introduce = () => {
  return (
    <div id="introduce">
      <Header />
      <TitleIntroduce />
      <IntroduceWrapper introduce={DATA_INTRODUCE} />
    </div>
  );
};

export default Introduce;
