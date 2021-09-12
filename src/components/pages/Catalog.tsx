import React from 'react';
import Rolls from './Rolls/Rolls';
import './Catalog.scss';
import { useTypesSelector } from '../hooks/useTypedSelector';

const Catalog: React.FC = () => {

    const {rolls} = useTypesSelector(state => state)

    return (
        <>
        {rolls.length !== 0 ?
        <div className='catalog__role'>
        {rolls.map(roll => 
            <Rolls key={roll.title} rolls={roll}/>
            )}
    </div>: 'Данные не подгружены'}
        </>
    )
}

export default Catalog;