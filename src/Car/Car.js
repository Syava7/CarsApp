import React, { Component } from 'react';
import './Cars.scss'



export default class Car extends Component {

  render() {
    const inputClasses = ['input']

    if (this.props.name !== '') {
      inputClasses.push('green')
    } else {
      inputClasses.push('red')
    }

    if (this.props.name.length > 4) {
      inputClasses.push('bold')
    }

    return (
      <div className="Car">
        <h3>Car name: {this.props.name}</h3>
        <p>Year: <strong>{this.props.year}</strong></p>
        <input 
          type="text" 
          onChange={this.props.onChangeName} 
          value={this.props.name}
          className={inputClasses.join(' ')} />
        <button onClick={this.props.onDelete}>Delete</button>
      </div>
    )
  }
}

