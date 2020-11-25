import React from 'react';
import ReactDOM from 'react-dom';

const app = document.querySelector('#app');

const Item = ({ item, removeItem, idx })=> {
    return (
    <li>
        { item }
        <button onClick={ ()=>removeItem(idx) }>x</button>
    </li>
    );
}

class App extends React.Component{
    constructor(){
        super();
        this.state = {
            items,
            message: ''
        };
        this.addItem = this.addItem.bind(this);
        this.removeItem = this.removeItem.bind(this);
    }
    addItem(){
        console.log(this);
        this.setState({ items: [...this.state.items, Math.random()]})
    }
    removeItem(idx){
        const items = this.state.items.filter((_, _idx)=> _idx !== idx);
        console.log(items);
        this.setState({ items });
    }
    render(){
        const { items, message } = this.state;
        const { addItem, removeItem } = this;
        return (
            <div>
                <h2>Count is { items.length }</h2>
                <h3>{ message }</h3>
                <button onClick={ addItem }>Add An Item</button>
                <ul>
                    {
                        items.map( (item, idx)=> <Item removeItem={ removeItem } idx={ idx } item= { item } key={ idx} />)
                    }
                    </ul>
            </div>     
        );

    }
}        

const items = [1, 2];


ReactDOM.render(<App />, app);

