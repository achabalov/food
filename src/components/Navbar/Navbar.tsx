import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.scss';
import logo from '../../images/header/logo.png';
import basket from '../../images/header/basket.svg';

const Navbar: React.FC = () => {

    return (
        <nav className='navbar'>
            <div className='navbar__section'>
                <div className='navbar__section__item'>
                    <div className='navbar__section__item__logo'>
                        <NavLink to='/' >
                            <img src={logo} alt='logotip'/>
                        </NavLink>
                    </div>
                    <div className='navbar__section__item__info'>
                        <div className='navbar__section__item__info__contact'>
                            <div className='navbar__section__item__info__contact__city'>
                                Волгоград
                            </div>
                            <div className='navbar__section__item__info__contact__phone'>
                                <a href='tel:8-800-550-30-30'>8-800-550-30-30</a>
                            </div>
                         </div>
                        <div className='navbar__section__item__info__lk'>
                            Личный кабинет
                        </div>
                    </div>
                </div>
            </div>
            <div className='navbar__section'>
                <div className='navbar__section__about'>
                    <div className='navbar__section__about__company'>
                        <div className='company'>О компании</div>
                        <div>Условия доставки</div>
                    </div>
                    <div className='navbar__section__about__users'>
                        <div>Пользовательское соглашение</div>
                    </div>
                </div>
                    <div className='basket'><img src={basket} alt="basket" /></div>
            </div>
        </nav>
    )
}

export default Navbar;