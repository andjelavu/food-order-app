import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";
import { useContext } from "react";
import CartContext from "../../store/cart-context";

const HeaderCartButton = (props) => {
  const cartContextObject = useContext(CartContext);

  const numberOfCartItems = cartContextObject.items.reduce((curNum, item) => {
    return curNum + item.amount;
  }, 0);

  return (
    <button onClick={props.onButtonClick} className={classes.button}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
};
export default HeaderCartButton;
