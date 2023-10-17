import './IntroduceWrapper.scss';
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from '@mui/material';
import { ProductType } from '@/api_type/Product';
import { CategoryType } from '@/api_type/Category';
import { formatPrice } from '@/utils';
import { useState } from 'react';

interface IntroduceWrapper {
  dataProduct: ProductType[];
  category: CategoryType[];
}

const IntroduceWrapper = ({ dataProduct, category }: IntroduceWrapper) => {
  const [dataCategory, setDataCategory] = useState<string>('0');

  const ChangeCategory = (e: SelectChangeEvent) => {
    setDataCategory(e.target.value);
  };

  return (
    <div className="wrapper__introduce">
      <div className="wrapper__introduce__select">
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Loại Kiểu Tóc</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={dataCategory}
            label="Loại Kiểu Tóc"
            onChange={ChangeCategory}
          >
            <MenuItem value="0">Tất Cả Sản Phẩm</MenuItem>
            {category.map((e) => {
              return (
                <MenuItem key={e.id} value={e.id}>
                  {e.categoryName}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
      </div>
      <div className="wrapper__introduce__grid">
        {dataCategory !== '0'
          ? category
              .find((e) => e.id === dataCategory)
              ?.products.map((v) => {
                return (
                  <div key={v.id} className="wrapper__introduce__grid__item">
                    <img
                      className="wrapper__introduce__grid__item__img"
                      src={v.urlImg}
                    />
                    <div>{v.productName}</div>
                    <div>{formatPrice(v.price)}</div>
                  </div>
                );
              })
          : dataProduct.map((e) => {
              return (
                <div key={e.id} className="wrapper__introduce__grid__item">
                  <img
                    className="wrapper__introduce__grid__item__img"
                    src={e.urlImg}
                  />
                  <div>{e.productName}</div>
                  <div>{formatPrice(e.price)}</div>
                </div>
              );
            })}
      </div>
    </div>
  );
};

export default IntroduceWrapper;
