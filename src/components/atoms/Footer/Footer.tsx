import './Footer.scss';
import PaymentIcon from '@mui/icons-material/Payment';
import CallIcon from '@mui/icons-material/Call';
const Footer = () => {
  return (
    <div className="footer__wrapper">
      <div className='footer__wrapper__item'>
        <h3>Jet Barber Shop</h3>
        <p>11 Đại Lộ 2 , Phước Bình , Tp Thủ Đức</p>
        <p>Since : 2023</p>
        <h3> Trung Tâm Đào Tạo Nghề Jet Barber Shop </h3>
        <p>Địa Chỉ : </p>
        <p>HCM : 11 Đại Lộ 2 , Phước Bình Tp Thủ Đức</p>
      </div>
      <div className='footer__wrapper__item'>
        <h3>Giờ Phục Vụ</h3>
        <p>Thứ 2 đến Chủ Nhật: 8h - 20h</p>
        <div style={{display:'flex', alignItems:'center'}}> <CallIcon  className='mr-2'/> Holine : 0329781232</div>
        <h3> Chấp Nhận Thanh Toán Thẻ ATM</h3>
        <PaymentIcon />
      </div>
      <div className='footer__wrapper__item'>
        <img className='mt-4 footer__wrapper__item__img' height={100} width={100} alt='logo' src='./Logo.png'/>
      </div>
    </div>
  );
};

export default Footer;
