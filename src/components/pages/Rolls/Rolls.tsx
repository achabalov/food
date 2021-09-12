import React from 'react';
import './Rolls.scss';
import roll1 from './rolls/rolls1.png'
import roll2 from './rolls/rolls2.png'
import roll3 from './rolls/rolls3.png'
import roll4 from './rolls/rolls4.png'
import roll5 from './rolls/rolls5.png'
import roll6 from './rolls/rolls6.png'

interface RollsItem {
    rolls: any,
}

const Rolls = ({rolls}: RollsItem) => {
    console.log(rolls.image);
    
    return (
        <div className={`card__rolle ${rolls.color}`}>
            <div className='card__rolle__image'>
                <img src={
                rolls.image ==='rolls1' ? 
                roll1 : rolls.image === 'rolls2' ? 
                roll2 : rolls.image === 'rolls3' ? roll3 :
                rolls.image === 'rolls4' ? roll4 :
                rolls.image === 'rolls5' ? roll5 :
                roll6
                } alt="" />
            </div>
            <div className={`card__rolle__character ${rolls?.color}`}>
                <div className='card__rolle__title'>
                    {rolls.title}
                </div>
                <div className='card__rolle__description'>
                    {rolls.description}
                </div>
                <div className='card__rolle__count'>
                    {rolls.count}шт.
                </div>
                <div className='card__rolle__buy'>
                    {rolls.price}
                    <button>в корзину</button>
                </div>

            </div>
        </div>
    )
}

export default Rolls;