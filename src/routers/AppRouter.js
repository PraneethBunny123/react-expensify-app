import React from 'react'
import { BrowserRouter, Routes, Route, Link, NavLink, useLocation} from 'react-router-dom'
import ExpenseDashboardPage from '../components/Dashboard'
import AddExpensePage from '../components/AddExpense'
import EditExpensePage from '../components/EditExpense'
import Help from '../components/Help'
import NotFoundPage from '../components/Error404'
import Header from '../components/Header'


const AppRouter = () => (
    <BrowserRouter>
        <Header />
        <Routes>
            <Route path='/' element={<ExpenseDashboardPage />} />
            <Route path='/create' element={<AddExpensePage />} />
            <Route path='/edit/:id' element={<EditExpensePage />} />
            <Route path='/help' element={<Help />} />
            <Route path="*" element={<NotFoundPage />} />
        </Routes>
    </BrowserRouter>
)

export default AppRouter;