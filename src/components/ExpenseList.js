import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import getVisibleExpenses from '../selectors/expenses';

const ExpenseList = (props) => {
    return (
        <div>
            <h1>Expense List</h1>
            {props.expenses.map((expenseItem) => 
                <ExpenseListItem 
                    key={expenseItem.description} 
                    id={expenseItem.id}
                    description={expenseItem.description}
                    note={expenseItem.note}
                    amount={expenseItem.amount}
                    createdAt={expenseItem.createdAt}
                />)}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        expenses: getVisibleExpenses(state.expenses, state.filters)
    }
}

export default connect(mapStateToProps)(ExpenseList)
