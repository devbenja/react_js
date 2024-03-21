import './app.css';
import { useState } from 'react';

// Counter App

export const App = () => {

    const [ value, setValue ] = useState(0);

    const handleAdd = () => setValue( value + 1);
    const handleSubstract = () => setValue( value - 1);
    const handleReset = () => setValue(0);

  return (
    <div>
        <h1>Counter App</h1>
        <h4>{ value }</h4>
        <button onClick={ handleAdd }> +1 </button>
        <button onClick={ handleSubstract }> -1 </button>
        <button onClick={ handleReset }> Reset </button>
    </div>
  );

};
