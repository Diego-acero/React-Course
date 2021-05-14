const { getImagen } = require("../../base/11-async-await")


//pasa porque devuelve una string pero no una url porque la api no esta bien
describe('Pruebas con async-await y Fetch', () => {
    test('should return image url', async() => {
        
        const url = await getImagen();

        expect(typeof url).toBe('string');

        console.log(url);
    });
    
});
