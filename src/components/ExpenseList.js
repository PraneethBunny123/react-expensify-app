import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import getVisibleExpenses from '../selectors/expenses';

const ExpenseList = (props) => {
    return (
        <div className='content-container'>
            <div className='list-header'>
                <div className='show-for-mobile'>Expenses</div>
                <div className='show-for-desktop'>Expense</div>
                <div className='show-for-desktop'>Amount</div>
            </div>
            <div className='list-body'>
                {props.expenses.length === 0 ? (
                    <div className='list-item list-item--message'>
                        <span>No Expenses</span>
                    </div>
                ) : (
                    props.expenses.map((expenseItem) => 
                        <ExpenseListItem 
                            key={expenseItem.description} 
                            id={expenseItem.id}
                            description={expenseItem.description}
                            note={expenseItem.note}
                            amount={expenseItem.amount}
                            createdAt={expenseItem.createdAt}
                        />
                    )
                )}
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        expenses: getVisibleExpenses(state.expenses, state.filters)
    }
}

export default connect(mapStateToProps)(ExpenseList)
