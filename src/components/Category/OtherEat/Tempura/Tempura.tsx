import React from 'react';
import tempura from '../../../../images/category/Other/tempura/tempura_desktop.png';
import drink from '../../../../images/category/Other/tempura/beverages_desktop.png';
import './Tempura.scss';

const Tempura: React.FC = () => {

    return (
        <div className='tempura'>
            <div className='tempura__left'>
                <div className='tempura__left__image'>
                    <img src={tempura} alt="Темпура" />
                </div>
                <div>ТЕМПУРА</div>
            </div>
            <div className='tempura__right'>
                <div>НАПИТКИ</div>
                <div className='tempura__right__image'>
                    <img src={drink} alt="Напитки" />
                </div>
            </div>        
            </div>
    )
}

export default Tempura;