import React from 'react';
import App from './Components/App';
import FavoriteRecipieList from './Components/FavoriteRecipieList';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducers/index';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const store = createStore(rootReducer);
store.subscribe(() => console.log('store', store.getState()));

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <Switch>
                <Route exact path='/' component={App} />
                <Route path='/favorites' component={FavoriteRecipieList} />
            </Switch>
        </Router>

    </Provider>,
    document.getElementById('root')
);