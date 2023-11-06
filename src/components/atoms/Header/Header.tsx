import { DATA_HEADER } from '@/constants/constant';
import './Header.scss';
import { goTo } from '@/ts/router';
import FacebookIcon from '@mui/icons-material/Facebook';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Header = () => {
  const { t } = useTranslation();

  return (
    <div className="wrapper__header">
      <div className="wrapper__header__logo">
        <img src="Logo.png" alt="" className="wrapper__header__logo__image" />
      </div>
      {DATA_HEADER.map((e) => (
        <div
          onClick={() => {
            goTo(e.routerName);
          }}
          className="wrapper__header__title"
          key={e.id}
        >
          {t(`header.${e.name}`)}
        </div>
      ))}
      <Link
        to="https://www.facebook.com/profile.php?id=100082137683982"
        target="_blank"
      >
        <FacebookIcon
          color="info"
          fontSize="large"
          className="wrapper__header__icon"
        />
      </Link>
    </div>
  );
};

export default Header;
