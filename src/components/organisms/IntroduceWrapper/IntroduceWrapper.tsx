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
  const [valueRange, setValueRange] = useState<number>(0);

  /// Price maximum
  const maxPrice = Math.max(...dataProduct.map((product) => product.price));

  const ChangeCategory = (e: SelectChangeEvent) => {
    setDataCategory(e.target.value);
  };

  const handleChangeRange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValueRange(Number(e.target.value));
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
        <input
          className="mt-4"
          type="range"
          min="1"
          max={maxPrice}
          value={valueRange || maxPrice}
          onChange={handleChangeRange}
        />
        <div className="fs-20 ml-1">{formatPrice(valueRange || maxPrice)}</div>
      </div>
      <div className="wrapper__introduce__grid">
        {dataCategory !== '0'
          ? category
              .find((e) => e.id === dataCategory)
              ?.products.filter((c) => !valueRange ? maxPrice : valueRange >= c.price)
              .map((v) => {
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
          : dataProduct
              .filter((v) => !valueRange ? maxPrice : valueRange >= v.price)
              .map((e) => {
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
