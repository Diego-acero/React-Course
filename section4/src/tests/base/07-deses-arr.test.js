import { retornaArreglo } from '../../base/07-deses-arr';

describe('test 07-deses-arr', () => {

    test('should return a number', () => {
        const [letras, numeros] = retornaArreglo();

        //expect(arr).toEqual(['ABC', 123]);
        expect(letras).toBe( 'ABC' );
        expect(typeof letras).toBe('string');

        expect(numeros).toBe(123);
        expect(typeof numeros).toBe('number');
    })
    
    
})
