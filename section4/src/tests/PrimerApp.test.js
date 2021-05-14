import React from 'react';
import { shallow } from 'enzyme';
import PrimeraApp  from '../PrimeraApp';

describe('Pruebas <PrimerApp />', () => {
    
    test('Debe mostrar hola', () => {
        
        const saludo = 'Hola';
        const wrapper = shallow(<PrimeraApp saludo = { saludo } />);

        expect(wrapper).toMatchSnapshot();
        //Enzyme


        //libreria basica de react
        //const {getByText} = render(<PrimeraApp saludo = { saludo }/> );
        
        //expect(getByText(saludo)).toBeInTheDocument();
    })
    
})
