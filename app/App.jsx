import React from 'react';
import {render} from 'react-dom';
import Main from './Modules/Main/View/MainView';
import {Provider} from 'react-redux';
import ReduxStore from './ReduxStore';
import PortalContainer from './Modules/Portal/Containers/PortalContainer';
import {BrowserRouter, Route} from 'react-router-dom';

render((
    <Provider store={ReduxStore}>
        <BrowserRouter>
            <div style={{width: '100%', height: '100%'}}>
                <Route component={PortalContainer}/>
                <Route exact path="/:urlPath" component={Main}/>
            </div>
        </BrowserRouter>
    </Provider>
), document.getElementById('app'));