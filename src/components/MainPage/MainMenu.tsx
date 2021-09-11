import React from 'react';
import catalogRoll from '../API/mainPage.json'
import AllTypeRolls from '../Category/AllTypeRolls/AllTypeRolls';
import OtherEat from '../Category/OtherEat/OtherEat';
import Sets from '../Category/Sets/Sets';
import WokConstructor from '../Category/WokConstuctor/WokConstructor';
import './MainMenu.scss'

const MainMenu: React.FC = () => {
    return (
        <main className='main__category'>
            <Sets />
            <AllTypeRolls />
            <WokConstructor />
            <OtherEat />
        </main>
    )
}

export default MainMenu;