import React, { Component } from 'react';
import { Router, BrowserRouter, Route, Link } from 'react-router-dom';

import Home from './Home.js'

export default class Root extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <BrowserRouter>
                <div>
                    <Route exact path={"/"} component={Home} />
                </div>
            </BrowserRouter>
        )
    }
}