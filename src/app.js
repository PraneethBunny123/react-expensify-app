import React from 'react'
import ReactDOM, { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import { startSetExpenses } from './actions/expenses';
import getVisibleExpenses from './selectors/expenses';
import 'normalize.css/normalize.css'
import './styles/styles.scss'
import { auth, onAuthStateChanged } from './firebase/firebase'
import AppRouter, { history } from './routers/AppRouter'
import { login, logout } from './actions/auth';

const container = document.getElementById('app');
const root = createRoot(container)


const store = configureStore()


const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
)



// ReactDOM.render(routes)
// ReactDOM.createRoot(container).render(jsx)


let hasRendered = false
const renderApp = () => {
    if(!hasRendered) {
        root.render(jsx)
        hasRendered = true
    }
}


onAuthStateChanged(auth, (user) => {
    if(user) {
        console.log('uid', user.uid)
        store.dispatch(login(user.uid))
        store.dispatch(startSetExpenses()).then(() => {
            renderApp()
            if(history.location.pathname === '/') {
                history.push('/dashboard')
            }
        })
        console.log('log in')
    }else {
        store.dispatch(logout())
        renderApp()
        history.push('/')
        console.log('log out')
    }
})