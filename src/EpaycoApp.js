import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";

import { DocumentForm } from './pages/DocumentForm';
import { Facturas } from './pages/Facturas';
import { AnimatedSwitch } from 'react-router-transition';

import './App.css';
export const EpaycoApp = () => {

    return (
        <Router>
            <AnimatedSwitch
      atEnter={{ opacity: 1 }}
      atLeave={{ opacity: 1 }}
      atActive={{ opacity: 1 }}
    >
            <Switch>
                <Route
                    exact
                    path='/'
                    component={ DocumentForm }
                />
                <Route
                    path="/facturas"
                    component={ Facturas }
                />
            </Switch>
            </AnimatedSwitch>s
        </Router> 
    );
}