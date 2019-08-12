import React, { Component } from 'react';
import Car from './Car/Car.js' 
import './App.css';

class App extends Component {


  state = {
    cars: [
      {name: 'Audi', year: 2020},
      {name: 'Mazda', year: 2018},
      {name: 'Ford', year: 2019}
    ],
    pageTitle: 'React components'
  }

  onChangeTitle = () => {
    console.log('click')
  }

  render() {

    const cars = this.state.cars

    return (
      <div className="App">
        <h1>{this.state.pageTitle}</h1>

        <button onClick={this.onChangeTitle}>Click me</button>

        <Car name={cars[0].name} year={cars[0].year} />
        <Car name={cars[1].name} year={cars[1].year} />
        <Car name={cars[2].name} year={cars[2].year} />
      </div>
    );
  }
}

export default App;
