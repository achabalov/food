import React from 'react';
import rolls from '../../../images/category/AllTypeSets/rolls_desktop1.png';
import fried from '../../../images/category/AllTypeSets/fried_rolls_desktop3.png';
import sushi from '../../../images/category/AllTypeSets/sushi_desktop2.png';
import baked from '../../../images/category/AllTypeSets/baked_rolls_desktop4.png';
import './AllTypeRolls.scss'

const AllTypeRolls: React.FC = () => {
    
    return (
        <div className='allrolls'>
            <div className='allrolls__item left'>
                <div className='allrolls__item__left'>
                    <img src={rolls} alt='rolls'/>
                </div>
                <div className='allrolls__item__title'>
                    РОЛЛЫ
                </div>
            </div>
            <div className='allrolls__item right'>
                <div className='allrolls__item__title'>
                     СУШИ
                </div>
            <div className='allrolls__item__right'>
                    <img src={sushi} alt='rolls'/>
                </div>
            </div>
            <div className='allrolls__item  left'>
            <div className='allrolls__item__left'>
                    <img src={fried} alt='rolls'/>
                </div>
                <div className='allrolls__item__title'>
                ЖАРЕНЫЕ<br /> РОЛЛЫ
                </div>
            </div>
            <div className='allrolls__item right'>
            <div className='allrolls__item__title'>
                     ЗАПЕЧЕННЫЕ<br/> РОЛЛЫ
                </div>
            <div className='allrolls__item__right'>
                    <img src={baked} alt='rolls'/>
                </div>
            </div>
        </div>
    )
}

export default AllTypeRolls;