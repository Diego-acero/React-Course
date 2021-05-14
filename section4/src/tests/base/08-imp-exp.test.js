import {getHeroeById, getHeroesByOwner} from '../../base/08-imp-exp';
import heroes from '../../data/heroes';


describe('Test for 08-imp-exp', () => {
    
    test('should return heroe by id', () => {
        const id = 1;
        const heroesData = heroes.find( h => h.id === id);

        const heroe = getHeroeById(1);

        //al ser objetos otra forma seria
        //expect(heroe).toEqual(heroeData);

        expect(heroe.id).toBe(id);
        expect(heroe.name).toBe(heroesData.name);
        expect(heroe.owner).toBe(heroesData.owner);
    })

    test('should return undifined when id does not exist', () => {
        
        const id = 20000;

        const heroe = getHeroeById(id);

        expect(heroe).toBeUndefined();
    })
    
    test('should return all DC heroes when filtered by owner', () => {
        const owner = 'DC';

        const heroesData = heroes.filter( heroe => heroe.owner === owner);
        const dcHeroes = getHeroesByOwner(owner);

        expect(dcHeroes).toEqual(heroesData);
    })

    test('should return all DC heroes when filtered by owner', () => {
        const owner = 'Marvel';

        const heroesData = heroes.filter( heroe => heroe.owner === owner);
        const marvelHeroes = getHeroesByOwner(owner);

        expect(marvelHeroes.length).toBe(2);
    })
    
})
