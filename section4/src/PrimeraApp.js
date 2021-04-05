
//Hay dos tipos de componentes
//Los que se hacen con clases y los que se hacen con funciones.
//React esta tendiendo a ir hacia los que son por funciones y estos son los que se van a utilizar en el curso.
//Functional components


//<> </> es otra forma de introducir un <Fragment></Fragment>

//El Stringify es para darle formato a los objetos y <pre></pre> lo hace monospace
const PrimeraApp = () => {

    const saludo = 'Hola mundo saludo';
    const objeto = {
        name: 'Diego',
        edad: 28
    }

    return ( 
        <>
            <h1>{saludo}</h1>
            <pre>{ JSON.stringify(objeto, null , 3) }</pre>
            <p>Mi Priemera App</p>
        </> 
        
    );
}

export default PrimeraApp; 