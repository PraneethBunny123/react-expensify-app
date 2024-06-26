import React from "react";
import { connect } from "react-redux";
import numeral from "numeral";
import getVisibleExpenses from "../selectors/expenses";
import selectExpensesTotal from "../selectors/expenses-total"

const ExpenseSummary = ({ expenseCount, expensesTotal }) => {
    const expenseWord = expenseCount === 1 ? "expense" : "expenses"
    const formattedExpenseTotal = numeral(expensesTotal / 100).format('$0,0.00')
    return (
        <div>
            <h3>Viewing {expenseCount} {expenseWord} totalling {formattedExpenseTotal}</h3>
        </div>
    )
}

const mapStateToProps = (state) => {
    const VisibleExpenses = getVisibleExpenses(state.expenses, state.filters)

    return {
        expenseCount: VisibleExpenses.length,
        expensesTotal: selectExpensesTotal(VisibleExpenses)
    }
}

export default connect(mapStateToProps)(ExpenseSummary);