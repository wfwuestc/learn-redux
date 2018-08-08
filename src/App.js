import React, {Component} from 'react';
import './App.css';
import store from './Store.js';
import * as Actions from './Actions.js';
import TodoItem from './components/TodoItem'

const log = console.log.bind(console);

class App extends Component {
    constructor() {
        super();
        this.addItem = this.addItem.bind(this);
        this.onChange = this.onChange.bind(this);

        this.state = this.getOwnState()
    }

    getOwnState() {
        return {
            lists: store.getState().list
        }
    }

    onChange() {
        this.setState(this.getOwnState());
    }

    addItem(e) {
        if (e.keyCode === 13) {
            let val = e.target.value;
            store.dispatch(Actions.add(val))
        }
    }

    changeState(e) {
        let id = e.target.dataset.id;
        store.dispatch(Actions.toggle(id))
    }

    componentDidMount() {
        store.subscribe(this.onChange);
    }

    render() {
        let {lists} = this.state;
        return ([<input key={1} type="text" id="test" onKeyUp={this.addItem}/>,
                <div key={2} className="item-wrap">
                    {
                        lists.map((el, i) => {
                            return (
                                <TodoItem key={i} el={el} change={this.changeState}/>
                            )
                        })
                    }
                </div>]
        );
    }
}

export default App;
