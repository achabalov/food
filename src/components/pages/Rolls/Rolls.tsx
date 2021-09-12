import React from 'react';
import './Rolls.scss';

interface RollsItem {
    rolls: any
}

const Rolls = ({rolls}: RollsItem) => {
    console.log(rolls);
    
    return (
        <div className={`card__rolle ${rolls?.color}`}>
            <div className='card__rolle__image'>
                <img src={rolls.image} alt="" />
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