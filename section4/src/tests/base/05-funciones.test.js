import { getUser, getUsuarioActivo } from "../../base/05-funciones"


describe('Pruebas en 05-funciones.js', () => {
    
    test('Get user deberia devolver un objeto ', () => {
        const userTest = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        }

        const user = getUser();

        expect(user).toEqual( userTest )
    })

    test('Get Usuario Activo deberia devolver un user con el nombre del parametro ', () => {
        
        const nombre = 'Diego';
        const usuarioActivoTest = {
            uid: 'ABC567',
            username: nombre
        };

        const user = getUsuarioActivo(nombre);

        expect(user).toEqual( usuarioActivoTest );
    })
    
})
