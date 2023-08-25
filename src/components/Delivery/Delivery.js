import css from './Delivery.module.css'
import image1 from '../../images/1.png'
import image2 from '../../images/2.png'
import image3 from '../../images/3.png'

export const Delivery = () => { 
    return (
        <div>
            <ul className={css.deliveryList}>
                <li className={css.deliveryItem}>
                    <img className={css.deliveryImage} src={image1} alt='Умови виготовлення' />
                </li>
                <li className={css.deliveryItem}>
                    <img className={css.deliveryImage} src={image2} alt='Умови доставки' />
                </li>
                <li className={css.deliveryItem}>
                    <img className={css.deliveryImage} src={image3} alt='Умови оплати' />
                </li>
            </ul>
        </div>
    )
}