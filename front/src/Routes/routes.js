import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Landing from '../pages/Landing';
import CustomerList from '../pages/CustomerList'
import CustomerDetails from '../pages/CustomerDetails'

function Routes() {
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Landing} />
                <Route path="/list" component={CustomerList} />
                <Route path="/customer/:id" component={CustomerDetails} />
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;