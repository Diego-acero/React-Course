import { getSaludo } from '../../base/02-template-string';

describe('Pruebas en 02-template-string,js', () => {

    //para probar una function dentro de un test esta tiene que ser exportada

    test('get Saludo debe retornar hola nombre ', () => {
        
        const nombre = 'Diego';

        const saludo = getSaludo(nombre);

        expect(saludo).toBe(`Hola ${ nombre }`)
    })

    test('get Saludo debe retornar hola Carlos sin Argumento ', () => {
        
        const saludo = getSaludo();

        expect(saludo).toBe(`Hola Carlos`)
    })
    
    
})
