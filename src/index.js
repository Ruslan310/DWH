import React from 'react';
import {render} from 'react-dom';
import App from './App';
import {compose, createStore, applyMiddleware} from "redux"
import {Provider} from "react-redux";
import saga from "redux-saga"
import {rootReducer} from "./store/rootReducer";
import rootSaga from './saga/saga'
import './style/reset.css'
import './style/main.css'
import './style/table.css'
import './style/pagination.css'
import './style/modal.css'

const sagaMiddleware = saga()
const store = createStore(rootReducer, compose(
    applyMiddleware(sagaMiddleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
))
sagaMiddleware.run(rootSaga)

const app = (
    <Provider store={store}>
        <App/>
    </Provider>
)

render(app, document.getElementById('root')
)
