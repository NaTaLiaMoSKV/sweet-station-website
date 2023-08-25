import css from './Features.module.css'

import coupon1 from '../../images/сoupon1.jpg'
import coupon2 from '../../images/coupon2.jpg'
import coupon3 from '../../images/сoupon3.jpg'

export const Features = () => {
    return (
        <section>
        <h2 className={css.sectionTitle}>Наші переваги</h2>
        <ul className={css.featuresList}>
            <li className={css.featuresItem}>
                <h3 className={css.featuresText}>Смачний і оригінальний подарунок</h3>
                    <img className={css.featuresImage} src={coupon1} alt="discount coupon" />
                    
            </li>
            <li className={css.featuresItem}>
                    <h3 className={css.featuresText}>Якісні продукти</h3>
                    <img className={css.featuresImage} src={coupon2} alt="discount coupon"/>
            </li>
            <li className={css.featuresItem}>
                <h3 className={css.featuresText}>Бонуси при замовленні</h3>
                <img className={css.featuresImage} src={coupon3} alt="discount coupon" />
            </li>

            
        </ul>
    </section>
    )
}