import React from 'react';
import rolls from '../API/mainPage.json';
import Rolls from './Rolls/Rolls';
import './Catalog.scss';

const Catalog: React.FC = () => {
    
    return (
        <div className='catalog__role'>
            {rolls.map(roll => 
                <Rolls key={roll.title} rolls={roll}/>
                )}
        </div>
    )
}

export default Catalog;