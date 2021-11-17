import React from 'react';
import './card.styles.css';

// require.context('../assets', false, /\.(png|jpe?g|svg)$/);

export const Card = props =>(
    <div className='card-container'>
        {/* <img alt="monster" src={`https://robohash.org/${props.monster.id}?set=set2&80x80`}/> */}
        <img alt="cars" src={`../img/${props.monster.img}`}/>
        <h2>{props.monster.license_plate}</h2>
        <p>{props.monster.duration}</p>
    </div>
);