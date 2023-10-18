import { formatPrice } from '@/utils';
import './ListPriceWrapper.scss';
import { DATA_COMBO, DATA_PRICE_LIST } from '@/constants/constant';
import { useTranslation } from 'react-i18next';

const ListPriceWrapper = () => {
  const { t } = useTranslation();
  return (
    <div className="wrapper__list__price">
      <h1 className="wrapper__list__price__title">{t('price.list_price')}</h1>
      <table>
        <thead>
          <tr>
            <th>{t('price.service')}</th>
            <th>{t('price.fee')}</th>
          </tr>
        </thead>
        <tbody>
          {DATA_PRICE_LIST.map((e) => (
            <tr key={e.id}>
              <td data-column="First Name">{e.title}</td>
              <td data-column="Last Name">
                {formatPrice(e.price[0])}{' '}
                {e.price[1] ? '-  ' + formatPrice(e.price[1]) : ''}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <h1 className="wrapper__list__price__title"> GÍA MỘT SỐ COMBO </h1>
      <div className="wrapper__list__price__combo">
        {DATA_COMBO.map((e) => {
          return (
            <div key={e.id} className="wrapper__list__price__combo__col">
              <img
                className="wrapper__list__price__combo__col__img"
                src={e.image}
              />
              <p className="wrapper__list__price__combo__col__name">
                {e.title}
              </p>
              <p className="wrapper__list__price__combo__col__price">
                {formatPrice(e.price)}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ListPriceWrapper;
