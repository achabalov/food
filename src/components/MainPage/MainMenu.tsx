import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchRolls } from '../../store/ActionCreator/Rolls';
import AllTypeRolls from '../Category/AllTypeRolls/AllTypeRolls';
import OtherEat from '../Category/OtherEat/OtherEat';
import Sets from '../Category/Sets/Sets';
import WokConstructor from '../Category/WokConstuctor/WokConstructor';
import './MainMenu.scss'

const MainMenu: React.FC = () => {
    const dispatch = useDispatch()
    const ref: any = useRef(null);
    function getAPI() {
        dispatch(fetchRolls())
        setTimeout(()=> {
            ref?.current?.click()
        }, 1000)
    }

    return (
        <main onClick={() => dispatch(getAPI)} className='main__category'>
            <Sets />
            <AllTypeRolls />
            <WokConstructor />
            <OtherEat />
            <Link ref={ref} to={'/catalog'} />
        </main>
    )
}

export default MainMenu;