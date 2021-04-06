
//Hay dos tipos de componentes
//Los que se hacen con clases y los que se hacen con funciones.
//React esta tendiendo a ir hacia los que son por funciones y estos son los que se van a utilizar en el curso.
//Functional components

import PropTypes from 'prop-types';

//<> </> es otra forma de introducir un <Fragment></Fragment>

//El Stringify es para darle formato a los objetos y <pre></pre> lo hace monospace
/*const PrimeraApp = () => {

    const saludo = 'Hola mundo saludo';
    const objeto = {
        name: 'Diego',
        edad: 28
    }

    console.log(props);

    return ( 
        <>
            <h1>{saludo}</h1>
            <pre>{ JSON.stringify(objeto, null , 3) }</pre>
            <p>Mi Priemera App</p>
        </> 
        
    );
}
*/

//El saludo es una prop que se pasa desde el padre al hijo para 
const PrimeraApp = ( {saludo} ) => {


    return ( 
        <>
            <h1>{saludo}</h1>
            <p>Mi Priemera App</p>
        </> 
        
    );
}

//Esto obliga a utilizar las propiedades como se marca aqui.
//En este caso saludo tiene que ser un string y siempre tiene que ser mandado.
PrimeraApp.protoTypes = {
    saludo: PropTypes.string.isRequired,
}

//Es una forma ordenada de darle un valor por defecto sin necesitar ponerlo inline
PrimeraApp.defaultProps = {
    saludo: 'Hola Mundo'
}

export default PrimeraApp; 