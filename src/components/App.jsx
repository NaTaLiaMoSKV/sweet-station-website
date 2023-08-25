import { Delivery } from "./Delivery/Delivery";
import { Features } from "./Features/Features";
import { Footer } from "./Footer/Footer";
import { Header } from "./Header/Header";
import { Products } from "./Products/Products";
import { SwiperBombs } from "./SwiperBombs/SwiperBombs";

export const App = () => {
  return (
    <div>
      <Header />
      <Features />
      <section>
        <h2 className="sectionTitle">Наші смаколики</h2>
        <Products title='Їстівні чашечки' type='cups'/>
        <Products title='Готові чайні набори' type='teaSet' />
        
        <Products title='Готові набори чашечки + бомбочки' type='cupsAndBombs' />
        <SwiperBombs />
        <Products title='Подарункові Набори' type='giftSet'/>
      </section>
      <section>
        <h2 className="sectionTitle">Умови доставки</h2>
        <Delivery />
      </section>
      <Footer />
      
    </div>
  );
};
