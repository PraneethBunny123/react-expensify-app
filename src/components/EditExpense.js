import React from "react"
import { useParams } from "react-router-dom"
import { connect } from "react-redux"
import ExpenseForm from "./ExpenseForm"
import { editExpense, startRemoveExpense } from "../actions/expenses"
import { useNavigate } from 'react-router-dom'

const EditExpensePage = (props) => {
    const navigate = useNavigate();
    let {id} = useParams()
    let selectedExpense = props.expenses.find((expense) => expense.id === id)
    
    return (
        <div>
            <ExpenseForm 
                selectedExpense={selectedExpense}
                onsubmit={(expense) => {
                    props.dispatch(editExpense(selectedExpense.id, expense))
                    navigate('/')
                }}
            />
            <button onClick={() => {
                props.dispatch(startRemoveExpense({id: selectedExpense.id}))
                navigate('/')
            }}>remove</button>    
        </div>
    )
}


const mapStateToProps = (state) => {
    return {
        expenses: state.expenses
    }
}

export default connect(mapStateToProps)(EditExpensePage);