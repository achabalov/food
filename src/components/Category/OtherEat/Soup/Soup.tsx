import React from 'react';
import soup from '../../../../images/category/Other/soup/soups_desktop.png';
import './Soup.scss';

const Soup: React.FC = () => {

    return (
        <div className='soup'>
            <div className='soup__image'>
                <img src={soup} alt='СУП'/>
            </div>
            <div className='soup__title'>
                СУПЫ
            </div>
        </div>
    )
}

export default Soup;