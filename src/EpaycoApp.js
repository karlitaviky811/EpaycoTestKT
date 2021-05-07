import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    useHistory,
  } from "react-router-dom";

import { DocumentForm } from './pages/DocumentForm';
import { Facturas } from './pages/Facturas';

export const EpaycoApp = () => {

    return (
        <Router>
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
        </Router> 
    );
}