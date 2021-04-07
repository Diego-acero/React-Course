

describe('Pruebas archivo demo.js', () => {
    test('deben de ser iguales los String', () => {
        //1. Inicializacion
        const mensaje = 'Hola Mundo';
    
        //2. estimulo
        const mensaje2 = `Hola Mundo`
    
        //3.Observar Comportamiento
        expect(mensaje).toBe(mensaje2);
    })
} )

