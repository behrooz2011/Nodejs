import React from 'react';
import {Card} from './card.component'
import './card-list.styles.css';



export const CardList= props =>{
    console.log("Behi");
    // let x= props.monsters;
    // function check(e){
    //     return e.id==4
    // };
    // let y = x.filter(check);
    // function check2(e){
    //     if(e.id==1){
    //         return e.name
    //     }
    // }
    return(
        
        <div className='card-list'>
           
            {/* {console.log(x)}
            {console.log(y[0])} */}
            {/* {props.monsters.map(check2
            )} */}

            
            {/* {props.monsters.map(monster=>(
                <h1 key={monster.id}>{monster.name}</h1>
            ))} */}

            {props.allCards.map(monster=>(
                <Card key={monster.id} monster={monster}/>
            ))}
        </div>
    )
}