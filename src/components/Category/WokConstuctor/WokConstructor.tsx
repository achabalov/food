import React from 'react';
import wok_image from '../../../images/category/wokContructor/wok_desktop.png';
import './WokConstructor.scss'

const WokConstructor: React.FC = () => {

    return (
        <div className='wokconstructor'>
            <div className='wokconstructor__title'>
                ВОК<br /> КОНСТРУК <br /> ТОР
                <span className='wok__action'>СОБЕРИ СВОЙ</span>
            </div>
            <div className='wokconstructor__image'>
                <img src={wok_image} alt='вок' />
            </div>

        </div>
    )
}

export default WokConstructor