import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import New from './pages/New';

export default function Routes() {
    return ( //usar a prop exact no path / pq o / ta contido em todas as rotas
        // Switch garante q apenas uma rota e executada por vez
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Login} /> 
                <Route path="/dashboard" component={Dashboard} />
                <Route path="/new" component={New} />
            </Switch>
        </BrowserRouter>
    );
}