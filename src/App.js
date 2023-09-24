import { useState } from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";

function App() {
  const [isModalShown, setIsModalShown] = useState(false)

  const setVisibleModal = () => {
    setIsModalShown(true)
  }
  const hideModal = () => {
    setIsModalShown(false)
  }

  return (
    <CartProvider>
      {isModalShown && <Cart onClose={hideModal} />}
      <Header onShow={setVisibleModal}/>
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
