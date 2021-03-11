import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Menu from './Menu';
import Edit from './loja/Edit';
import Form from './loja/Form';
import List from './loja/List';

import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';

export default class Main extends Component {

    render()
    {
        return(
            <Router>
                <main>
                    <Menu />
                    <Switch>
                        <Route path="/loja/index" exact component={List} />
                        <Route path="/loja/form" component={Form} />
                        <Route path="/loja/edit/:id" component={Edit} />
                    </Switch>
                </main>
            </Router>
        )
    }

}

//Para renderizar dentro da <div id='main'></div>
ReactDOM.render(<Main />,document.getElementById('main'));