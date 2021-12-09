import React from 'react';
import '@testing-library/jest-dom';
import '@testing-library/user-event';
import {render} from '@testing-library/react';
import Paginated from './Paginated';


test('renders content',() => {
    const paginado = {
        number: 'this is a test',
        content: true
    }

    const component = render(<Paginated paginado={paginado}/>)
    console.log(component)
})

