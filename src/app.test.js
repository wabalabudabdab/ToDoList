import React from "react";
import App from "./App";
import ReactDOM from 'react-dom';
import addTodo from "./App";
import todos from './App'

it('renders without crushing', ()=>{
    const div = document.createElement('div');
    ReactDOM.render(<App/>, div);
    ReactDOM.unmountComponentAtNode(div);
})


it('now post should be added', ()=>{
    let testPhrase = "example";
    addTodo(testPhrase);
    expect(todos).toContain(testPhrase)
})

