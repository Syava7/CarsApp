import React from 'react';
import './Cars.scss'

export default ({name, year, onChangeName, onDelete}) => {
  const inputClasses = ['input']

  if (name !== '') {
    inputClasses.push('green')
  } else {
    inputClasses.push('red')
  }

  if (name.length > 4) {
    inputClasses.push('bold')
  }

  return (
    <div className="Car">
      <h3>Car name: {name}</h3>
      <p>Year: <strong>{year}</strong></p>
      <input 
        type="text" 
        onChange={onChangeName} 
        value={name}
        className={inputClasses.join(' ')} />
      <button onClick={onDelete}>Delete</button>
    </div>
  )
}