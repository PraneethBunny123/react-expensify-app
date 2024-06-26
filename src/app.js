import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux';
// import {createRoot} from 'react-dom/client'
import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';
import getVisibleExpenses from './selectors/expenses';

import 'normalize.css/normalize.css'
import './styles/styles.scss'

import AppRouter from './routers/AppRouter'

const container = document.getElementById('app');


const store = configureStore()


const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
)




// ReactDOM.render(routes)
ReactDOM.createRoot(container).render(jsx)

