import { getHeroeByIdAsync } from '../../base/09-promesas';
import heroes from '../../data/heroes';

describe('Test for async functions', () => {
    
    test('should return heroe by id', (done) => {
        const id = 1;

        getHeroeByIdAsync(id)
        .then(heroe => {
            expect(heroe).toEqual(heroes.find(h => h.id === id));
            done();
        });
    });

    test('should return error if theres is no heroe with that id', (done) => {
        const id = 2000;

        getHeroeByIdAsync(id)
        .catch(err => {
            expect(err).toBe('No se pudo encontrar el héroe');
            done();
        });
    });
});
