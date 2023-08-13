import React, { useState } from 'react';

const Square = ({value}) => {
  const [boxvalue , setboxvalue] = useState(null);

  function clickHandler(){
    setboxvalue('x');
  }
  return (
      <button className='square' onClick={clickHandler}></button>
  )
}

export default Square