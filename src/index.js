import React from 'react';
import {render} from 'react-dom';
import App from './App';
import {compose, createStore, applyMiddleware} from "redux"
import {Provider} from "react-redux";
import {rootReducer} from "./store/rootReducer";
import './style/reset.css'
import './style/main.css'
import './style/table.css'
import './style/pagination.css'
import './style/modal.css'

const store = createStore(rootReducer, compose(
    applyMiddleware(),
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
))

const app = (
    <Provider store={store}>
        <App/>
    </Provider>
)

render(app, document.getElementById('root')
)
