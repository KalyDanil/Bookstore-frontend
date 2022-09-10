import { EmptyCartStyle } from './EmptyCart.styled';

const EmptyCart: React.FC<{ cartIsEmpty: boolean }> = ({ cartIsEmpty }) => {
  const toMain = () => {
    window.location.href = '/main?page=1';
  };
  return (
    <EmptyCartStyle cartIsEmpty={cartIsEmpty}>
      <img src="./assets/image/cartBackground.svg" alt="cartBackground" />
      <div>
        <h1>Your cart is empty</h1>
        <p>Add items to cart to make a purchase. Go to the catalogue no.</p>
        <input type="button" value="Go to catalog" onClick={toMain} />
      </div>
    </EmptyCartStyle>
  );
};

export default EmptyCart;
