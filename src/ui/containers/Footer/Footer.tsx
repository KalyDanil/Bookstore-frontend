import { FooterStyled } from './Footer.styled';

const Footer: React.FC = () => {
  return (
    <FooterStyled>
      <div className="footer__firstDiv">
        <img className="footer__logo" src="./assets/image/logoWhite.svg" alt="logo" />
        <a className="footer__email" href="mailto: tranthuy.nute@gmail.com">tranthuy.nute@gmail.com</a>
        <a className="footer__telephone" href="tel:(480) 555-0103">(480) 555-0103</a>
      </div>
      <div className="footer__navigationDiv">
        <a className="footer__navigation" href="/main">Home Page</a>
        <a className="footer__navigation" href="/main">Catalog</a>
        <a className="footer__navigation" href="/profile">My Account</a>
        <a className="footer__navigation" href="/cart">Cart</a>
      </div>
      <div className="footer__mapDiv">
        <span>6391 Elgin St. Celina, Delaware 10299</span>
        <img className="footer__map" src="./assets/image/map.svg" alt="map" />
      </div>
    </FooterStyled>
  );
};

export default Footer;
