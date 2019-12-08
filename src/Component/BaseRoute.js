import React, {Component, Fragment } from 'react';
import { Router, Route } from "react-router-dom";
import Animals from '../Component/Animals';
import Fruits from '../Component/Fruits';

export default class BaseRoute extends Component{

    render(){
        return(
            <Router pathname={this.props.path} history={this.props.history}>
                <div>
                    <Route path="/" exact component={Animals} />   
                    <Route path="/animals" component={Animals} />
                    <Route path="/fruits" component={Fruits} /> 
                </div>                
            </Router>
        )
    }
}