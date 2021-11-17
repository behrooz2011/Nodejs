import React from 'react';
import './App.css';

import {CardList} from './components/card-list.component';
// import {Card} from './components/card.component';

class App extends React.Component{
  
  constructor(){
    super();
    this.state={
      cards:[],
      searchField:[]
    }
  }

  componentDidMount(){
    fetch('http://localhost:5001')
    // .then(res=>console.log(res))
    .then(res=>res.json())
    .then(response =>{
      this.setState({cards:response});
      console.log("number of results:",response.length);
      return response  
    })
    .then(value=>{
      let newValue = value.filter(({duration})=>duration >=0 && duration <259200000);
      let convertedDays = newValue.map( ({license_plate,duration}) =>({
            license_plate,
            duration:this.milliSecondConvertor(duration),
            img:`${license_plate}.jpg`
           }));
      this.setState({searchField: convertedDays})
    })
    // .then(val=>{
    //   let newVal = val.map( ({license_plate,duration}) =>({
    //     license_plate,
    //     duration:this.milliSecondConvertor(duration)
    //   }));
    //   console.log("number of filtered:",newVal);
    //   this.setState({searchField: newVal})
    // })
    // .catch(err=>console.log(err))
    .catch(err=>console.log(err))
  }

  milliSecondConvertor = ms =>{

      const days = Math.floor(ms / (24*60*60*1000));
      const daysms = ms % (24*60*60*1000);
      const hours = Math.floor(daysms / (60*60*1000));
      const hoursms = ms % (60*60*1000);
      const minutes = Math.floor(hoursms / (60*1000));
      const minutesms = ms % (60*1000);
      const sec = Math.floor(minutesms / 1000);
      if(days >= 0 && days <3){
        return days + " Days  " + hours + " Hours  " + minutes + " Min  " + sec+ " Sec";
      }
      
    
    // console.log(milliSecondConvertor(373729105));
    // console.log(milliSecondConvertor(259200000))
  };

  render(){
    console.log("Render cards: ",this.state.cards);
    // console.log("Render searchFiltered: ",this.state.searchField);
    const {searchField, cards} = this.state;
    // 3 days equals 259200000 miliseconds so:
    const filteredCars = cards.filter(({duration})=>duration >=0 && duration <259200000);
    console.log("FilteredCars:\n",filteredCars)

    return (
      <div className="App">
        <h1>Created by Bruce Bakshi </h1>
        <h3> Bruce.Bakshi@gmail.com</h3>
        <h4>+1-6476947594</h4>
        <CardList name='John' id='123' allCards={this.state.searchField} />
      </div>
    );
  }
}

export default App;
