import css from './Products.module.css'

import cups from '../../data/cups.json'
import teaSet from '../../data/teaSet.json'
import cupsAndBombs from '../../data/cupsAndBombs.json'
import giftSet from '../../data/giftSet.json'

import cupImage from '../../images/cup1.webp'
import teaSetImage1 from '../../images/box1.png'
import teaSetImage2 from '../../images/box2.png'
import teaSetImage3 from '../../images/box3.png'
import teaSetImage4 from '../../images/box4.png'
import cupsAndBombsImage1 from '../../images/cups-and-bombs-1.jpg'
import cupsAndBombsImage2 from '../../images/cups-and-bombs-2.jpg'
import cupsAndBombsImage3 from '../../images/cups-and-bombs-3.png'
import cupsAndBombsImage4 from '../../images/cups-and-bombs-4.jpg'
import cacaoBombsImage1 from '../../images/bombs-1.jpg'
import miniMaxiBombsImage1 from '../../images/mini-max.jpeg'


export const Products = ({ title, type }) => {
    let items;
    let composition = false;
    switch (type) {
        case 'cups':
            items = cups;
            break;
        case 'teaSet':
            items = teaSet;
            composition = true;
            break;
        case 'cupsAndBombs':
            items = cupsAndBombs;
            composition = true;
            break;
        case 'giftSet':
            items = giftSet;
            break;
        
        default:
            // items = null;
            break;
    }

    const findImage = (id) => {
        switch (id) {
            case 11:
                return cupImage;
            case 21:
                return teaSetImage1;
            case 22:
                return teaSetImage2;
            case 23:
                return teaSetImage3;
            case 24:
                return teaSetImage4;
            case 31:
                return cupsAndBombsImage1;
            case 32:
                return cupsAndBombsImage2;
            case 33:
                return cupsAndBombsImage3;
            case 34:
                return cupsAndBombsImage4;
            case 41:
                return cacaoBombsImage1;
            case 42:
                return cacaoBombsImage1;
            case 43:
                return cupsAndBombsImage4;
            case 44:
                return miniMaxiBombsImage1;
            default:
                return null;
        }
    }
        
    return (
        <div className={css.productsContainer}>
            <h3 className={css.productsContainerTitle}>{title}</h3>
            <ul className={css.productsList}>
                {items.map(item => (
                <li key={item.id} className={css.productsItem}>
                    <div>
                        <img className={css.productsImage} src={findImage(item.id)} alt={item.name} />
                        <div className={css.productsDescriptionContainer}>
                                <h4 className={css.productsName}>{item.name}</h4>
                                {composition && <p className={css.productsSpecification}>Склад:</p>}
                            {item.description.map((description, index) => (
                                <p className={css.productsDescription} key={index}>{description}</p>
                            ))}
                        </div>
                    </div>
                    <div className={css.productsOrderContainer}>
                        <div className={css.productsPriceContainer}>
                                <p className={css.productsPrice}>{item.price} грн.</p>
                            <p className={css.productsOldPrice}><del>{item.oldPrice} грн.</del> </p>
                        </div>
                        <button className={css.productsOrderButton} data-id={item.id}>Додати до кошика</button>
                    </div>
                </li>
            ))}
            </ul>
            
        </div>
    )
}