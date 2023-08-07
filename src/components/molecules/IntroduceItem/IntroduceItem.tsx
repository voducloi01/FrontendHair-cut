import './IntroduceItem.scss';
import { Link } from 'framework7-react';

interface IntroduceItemProps {
  img: string;
  title: string;
  content: string;
}

const IntroduceItem = ({ img, title, content }: IntroduceItemProps) => {
  return (
    <Link href="https://www.youtube.com/" external target="_blank">
      <div className="wrapper-introduce">
        <img className="item_img" src={img} alt="" />
        <div className="item_title">{title}</div>
        <div className="item_description">{content}</div>
      </div>
    </Link>
  );
};

export default IntroduceItem;
