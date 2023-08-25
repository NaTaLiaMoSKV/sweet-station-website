import css from './Footer.module.css'

import sprite from '../../images/symbol-defs.svg'

export const Footer = () => {
    return (
        <footer className={css.footer}>
            <section className={css.footerSection}>
                <div className={css.footerContainer}>
                    <p className={css.footerTitle}>Sweet Station</p>
                    <ul className={css.footerSocialNetworksList}>
                        <li className={css.footerSocialNetworksItem}>
                            <a href="https://web.telegram.org">
                                <svg className={css.footerSocialNetworksIcon} >
                                    <use className={css.footerSocialNetworksIconUse} href={sprite + "#icon-telegram"}></use>
                                </svg>
                            </a>
                        </li>
                        <li className={css.footerSocialNetworksItem}>
                            <a href="https://facebook.com/">
                                <svg className={css.footerSocialNetworksIcon} >
                                    <use className={css.footerSocialNetworksIconUse} href={sprite + "#icon-facebook"}></use>
                                </svg>
                            </a>
                        </li>
                        <li className={css.footerSocialNetworksItem}>
                            <a href="https://instagram.com/">
                                <svg className={css.footerSocialNetworksIcon} >
                                    <use className={css.footerSocialNetworksIconUse} href={sprite + "#icon-instagram"}></use>
                                </svg>
                            </a>
                        </li>
                    </ul>
                </div>
                <div className={css.footerCopyright}>
                    <p className={css.footerCopyrightText}>
                        © 2023 - All Rights Reserved.
                    </p>
                </div>
            </section>
            
        </footer>
    )
}