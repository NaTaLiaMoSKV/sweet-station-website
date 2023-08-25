import SwiperCore from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import './SwiperPagination.css'
// import 'font-awesome/css/font-awesome.min.css';
// import 'swiper/scss';
// import 'swiper/scss/navigation';
// import 'swiper/scss/pagination';

import css from './SwiperBombs.module.css'
import productCss from '../Products/Products.module.css'

import mini from '../../data/miniBombs.json'

import image1 from '../../images/swiper-bombs-1.jpg'
import image2 from '../../images/swiper-bombs-2.jpeg'
import image3 from '../../images/swiper-bombs-3.jpg'
import image4 from '../../images/swiper-bombs-4.jpg'
import image5 from '../../images/swiper-bombs-5.jpg'
import image6 from '../../images/swiper-bombs-6.jpg'
import image7 from '../../images/swiper-bombs-7.jpg'
import image8 from '../../images/swiper-bombs-8.jpg'
import image9 from '../../images/swiper-bombs-9.jpg'
import image10 from '../../images/swiper-bombs-10.jpg'
import image11 from '../../images/swiper-bombs-11.jpg'
import image12 from '../../images/swiper-bombs-12.jpg'


export const SwiperBombs = () => {
    SwiperCore.use([Navigation, Pagination]);

    const items = mini;
    // let size;
    // let price;
    // let oldPrice;
    // switch (type) {
    //     case 'mini':
    //         size = 4;
    //         price =  69;
    //         oldPrice = 79;
    //         break;
    //     case 'maxi':
    //         size = 7;
    //         price =  99;
    //         oldPrice = 119;
    //         break;
    
    //     default:
    //         break;
    // }

    const findImage = (id) => {
        switch (id) {
            case 51:
                return image1;
            case 52:
                return image2;
            case 53:
                return image3;
            case 54:
                return image4;
            case 55:
                return image5;
            case 56:
                return image6;
            case 57:
                return image7;
            case 58:
                return image8;
            case 59:
                return image9;
            case 510:
                return image10;
            case 511:
                return image11;
            case 512:
                return image12;
            default:
                return null;
        }
    }
        
    return (
        <div>
            <h3 className={productCss.productsContainerTitle}>Какао Бомбочки</h3>
            <div className={css.bombsContainer}>
                <div className={css.bombsDescriptionContainer}>
                    <h3 className={css.bombsTitle}>Міні бомбочки</h3>
                    <h4 className={css.bombsSubtitle}>Збери свій власний набір із різних смаків какао-бомбочок</h4>
                    <p className={css.bombsText}><span className={css.bombsSpecification}>Розмір:</span> 4 см в діаметрі</p>
                    <div className={css.priceContainer}>
                        <p className={productCss.productsPrice}> 69 грн.</p>
                        <p className={productCss.productsOldPrice}><del>79 грн.</del></p>
                    </div>
                    <button className={css.bombsOrderButton}>Обрати бомбочки</button>
                </div>
                <Swiper className={css.swiper}
                    spaceBetween={10}
                    pagination={{ clickable: true }}
                >
                {items.map(item => (
                    <SwiperSlide key={item.id}>
                        <div className={css.slideContent}>
                            <h3 className={css.itemTitle}>{item.name}</h3>
                            <img className={css.itemImage} src={findImage(item.id)} alt={item.name} />
                            <p className={css.itemDescription}>{item.description}</p>
                            {/* <button className={productCss.productsOrderButton}>Додати до кошика</button> */}
                        </div>
                    </SwiperSlide>
                ))}
                </Swiper>
            </div>
            <div className={css.maxiBombsContainer}>
                
                <Swiper className={css.swiper}
                    spaceBetween={10}
                    pagination={{ clickable: true }}
                >
                {items.map(item => (
                    <SwiperSlide key={item.id}>
                        <div className={css.slideContent}>
                            <h3 className={css.itemTitle}>{item.name}</h3>
                            <img className={css.itemImage} src={findImage(item.id)} alt={item.name} />
                            <p className={css.itemDescription}>{item.description}</p>
                        </div>
                    </SwiperSlide>
                ))}
                </Swiper>
                <div className={css.bombsDescriptionContainer}>
                    <h3 className={css.bombsTitle}>Максі бомбочки</h3>
                    <h4 className={css.bombsSubtitle}>Збери свій власний набір із різних смаків какао-бомбочок</h4>
                    <p className={css.bombsText}><span className={css.bombsSpecification}>Розмір:</span> 7 см в діаметрі</p>
                    <div className={css.priceContainer}>
                        <p className={productCss.productsPrice}> 99 грн.</p>
                        <p className={productCss.productsOldPrice}><del>119 грн.</del></p>
                    </div>
                    <button className={css.bombsOrderButton}>Обрати бомбочки</button>
                </div>
            </div>
            

        </div>
    )
}