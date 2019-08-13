import React from 'react';

export default ({name, year, onChangeName, onDelete}) => (
  <div style={{
    width: '300px',
    border: '5px solid red',
    marginBottom: '10px',
    paddingBottom: '10px'
  }}>
    <h3>Car name: {name}</h3>
    <p>Year: <strong>{year}</strong></p>
    <input type="text" onChange={onChangeName} value={name}/>
    <button onClick={onDelete}>Delete</button>
  </div>
)