import React, { useState } from 'react';
import PropTypes from 'prop-types';

const CounterApp = ({ value }) => {


    const [counter, setCounter] = useState( value );

    const handleAdd = () => {
        setCounter( counter + 1 );
        //Otra forma de hacerlo
        //para cuando no tienes acceso al counter en este caso
        //setCounter( ( counterAnterior ) => counterAnterior + 1)
    }

    const handleReset = () => setCounter(value);
    const handleSubstract = ()  => setCounter( counter - 1);

    return (
        <>
            <h1>Counter App</h1>
            <h2> { counter }</h2>
            <button onClick = { handleAdd }> +1 </button>
            <button onClick = { handleReset }> Reset </button>
            <button onClick = { handleSubstract }> -1 </button>
        </>
    );
}

CounterApp.propTypes = {
    value: PropTypes.number,
}

CounterApp.defaultProps = {
    value: 0
}

export default CounterApp;
