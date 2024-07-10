import React from 'react'
import { BrowserRouter, unstable_HistoryRouter as HistoryRouter, Routes, Route, Link, NavLink, useLocation} from 'react-router-dom'
import ExpenseDashboardPage from '../components/Dashboard'
import AddExpensePage from '../components/AddExpense'
import EditExpensePage from '../components/EditExpense'
import Help from '../components/Help'
import NotFoundPage from '../components/Error404'
import Header from '../components/Header'
import LoginPage from '../components/LoginPage'
import { createBrowserHistory } from 'history';
import PrivateRoute from "./PrivateRoute";

export const history = createBrowserHistory();

// const AppRouter = () => (
//     <HistoryRouter history={history}>
//         <Header />
//         <Routes>
//             <Route path='/' element={<LoginPage />} />
//             <PrivateRoute path='/dashboard' element={<ExpenseDashboardPage /> } />
//             <PrivateRoute path='/create' element={<AddExpensePage />} />
//             <PrivateRoute path='/edit/:id' element={<EditExpensePage />} />
//             <Route path='/help' element={<Help />} />
//             <Route path="*" element={<NotFoundPage />} />
//         </Routes>
//     </HistoryRouter>
// )

// export default AppRouter;

const AppRouter = () => (
    <HistoryRouter history={history}>
        <div>
            <Routes>
                <Route path="/" element={<LoginPage />} />
                <Route
                    path="dashboard"
                    element={
                        <PrivateRoute>
                            <ExpenseDashboardPage />
                        </PrivateRoute>
                    }
                />
                <Route
                    path="/create"
                    element={
                        <PrivateRoute>
                            <AddExpensePage />
                        </PrivateRoute>
                    }
                />
                <Route
                    path="/edit/:id"
                    element={
                        <PrivateRoute>
                            <EditExpensePage />
                        </PrivateRoute>
                    }
                />
                <Route path='/help' 
                    element={
                        <PrivateRoute>
                            <Help />
                        </PrivateRoute>
                    } 
                />
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </div>
    </HistoryRouter>
)

export default AppRouter;