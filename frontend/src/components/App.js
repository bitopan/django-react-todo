import React, { Component } from 'react';
import ReactDom from 'react-dom';

import Dashboard  from "./todos/Dashboard";

import { Provider } from "react-redux";
import store from "../store";

import Header from './layout/Header';

import { Router, Route, Switch } from 'react-router-dom'; // added

import history from '../history'; // added
import TodoDelete from './todos/TodoDelete'; // added
import TodoEdit from './todos/TodoEdit'; // added

class App extends Component{
    render(){
        return(
            <Provider store={store}>
                <Router history={history}>
                    <Header />
                    <Switch>
                        <Route exact path='/' component={Dashboard} />
                        <Route exact path='/delete/:id' component={TodoDelete} />
                        <Route exact path='/edit/:id' component={TodoEdit} /> // added
                    </Switch>
                </Router>
            </Provider>
        );
    }
}

ReactDom.render(<App />, document.querySelector('#app'));