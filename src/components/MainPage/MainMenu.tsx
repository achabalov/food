import React from 'react';
import catalogRoll from '../API/mainPage.json'
import Sets from '../Category/Sets';
import './MainMenu.scss'

const MainMenu: React.FC = () => {
    console.log(catalogRoll);
    return (
        <main className='main__category'>
            <Sets />
            <Sets />
            <Sets />
            <Sets />
        </main>
    )
}

export default MainMenu;