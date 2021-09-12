import React from 'react';
import Rolls from './Rolls/Rolls';
import './Catalog.scss';
import { useTypesSelector } from '../hooks/useTypedSelector';
import { Redirect } from 'react-router';

const Catalog: React.FC = () => {

    const {rolls} = useTypesSelector(state => state)

    return (
        <>
        {rolls.length !== 0 ?
        <div className='catalog__role'>
        {rolls.map(roll => 
            <Rolls key={roll.title} rolls={roll}/>
            )}
    </div>: <Redirect to='/' />}
        </>
    )
}

export default Catalog;
