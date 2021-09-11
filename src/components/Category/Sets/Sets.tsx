import React from 'react';
import set from '../../../images/category/Sets/sets_tablet.png';
import './Sets.scss'

const Sets: React.FC = () => {

    return (
        <div className='sets'>
            <div className='sets__translate'>
            <div className='sets__image'>
                <img src={set} alt='set'/>
            </div>
            <div className='sets__title'>
                <div className='sets__title__name'>СЕТЫ</div>
            </div>
            </div>
        </div>
    )
}

export default Sets;