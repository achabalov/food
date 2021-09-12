import React from 'react';
import Soup from './Soup/Soup';
import Tempura from './Tempura/Tempura';
import './OtherEat.scss';

const OtherEat: React.FC = () => {
    
    return (
        <div className='OtherEat'>
            <Soup />
            <Tempura />
        </div>
    )
}

export default OtherEat;