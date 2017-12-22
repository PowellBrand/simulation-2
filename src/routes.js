import React from 'react';
import { Switch, Route } from 'react-router-dom';
import auth from './components/auth';
import dashboard from './components/dashboard';
import wizard1 from './components/wizard1';
import wizard2 from './components/wizard2';
import wizard3 from './components/wizard3';
import wizard4 from './components/wizard4';
import wizard5 from './components/wizard5';


export default (
    //42G, 42F, 42H
    <Switch>       
        <Route exact path = '/' component={auth} />
        <Route path = '/dashboard' component={dashboard} />
        <Route path = '/wizard1' component={wizard1} />
        <Route path = '/wizard2' component={wizard2} />
        <Route path = '/wizard3' component={wizard3} />
        <Route path = '/wizard4' component={wizard4} />
        <Route path = '/wizard5' component={wizard5} />
    </Switch>
)