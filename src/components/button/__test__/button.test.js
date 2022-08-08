import { render ,screen} from "@testing-library/react";
import React from "react";
import ReactDOM from 'react-dom';
import Button from '../button.jsx';


it('renders without crashing', ()=>{
    render(<Button/>)
});

it('renders without crashing', ()=>{
    render(<Button label="Add Todo"/>)
    render(<Button label="Clear complete"/>)
    const addtodo = screen.getByRole('button',{ name: /Add Todo/i })
    const clearcomplete = screen.getByRole('button',{ name: /Clear complete/i })
});


