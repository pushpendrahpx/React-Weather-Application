import React, { Component } from 'react'
import Title from './components/Title'

import API from './confidential/API';
import Form from './components/Form';
import Show from './components/Show';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
         API_KEY:'d32f6da459a662428a1d39144b8f0670',
         weather:{
           main: {
             temp: ""
           }
         }
    }

  }
  getweather = async(event)=>{
    event.preventDefault();
    const city = event.target.elements.city.value;
    const country = event.target.elements.country.value;
    if(city && country){
      const api_call =  await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=d32f6da459a662428a1d39144b8f0670`);
    

  
      const data = await api_call.json();
      this.setState({weather:data},()=>{
      });
    }else{
      alert("City Name is Empty");
    }
  }
  render() {
    return (
      <div>
        <Title />
        <Form getweather={this.getweather} x={1} />
        <Show weather={this.state.weather} />
      </div>
    )
  }
}

export default App
