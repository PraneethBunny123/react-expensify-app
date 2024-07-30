import React from "react"
import { useParams } from "react-router-dom"
import { connect } from "react-redux"
import ExpenseForm from "./ExpenseForm"
import { startEditExpense, startRemoveExpense } from "../actions/expenses"
import { useNavigate } from 'react-router-dom'

const EditExpensePage = (props) => {
    const navigate = useNavigate();
    let {id} = useParams()
    let selectedExpense = props.expenses.find((expense) => expense.id === id)
    
    return (
        <div>
            <div className="page-header">
                <div className="content-container">
                    <h1 className="page-header__title">Edit Expense</h1> 
                </div>
            </div>  
            <div className="content-container">
                <ExpenseForm 
                selectedExpense={selectedExpense}
                onsubmit={(expense) => {
                    props.dispatch(startEditExpense(selectedExpense.id, expense))
                    navigate('/dashboard')
                }}
                />
                <button className="button button--secondary" onClick={() => {
                    props.dispatch(startRemoveExpense({id: selectedExpense.id}))
                    navigate('/dashboard')
                }}>Remove expense</button> 
            </div>
        </div>
    )
}


const mapStateToProps = (state) => {
    return {
        expenses: state.expenses
    }
}

export default connect(mapStateToProps)(EditExpensePage);