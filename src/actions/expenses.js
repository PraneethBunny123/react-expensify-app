import {v4 as uuidv4} from 'uuid';
import db, { push, ref, get, child, remove } from '../firebase/firebase';

// ADD_EXPENSE
export const addExpense = (expense) => {
    return {
        type: 'ADD_EXPENSE',
        expense
    }
}


// startAddExpense
export const startAddExpense = (expenseData = {}) => {
    return (dispatch) => {
        const {
            description = '',
            note = '', 
            amount = 0, 
            createdAt = 0
        } = expenseData;
        const expense = {description, note, amount, createdAt}

        push(ref(db, 'expenses'), expense).then((ref) => {
            dispatch(addExpense({
                id: ref.key,
                ...expense
            }))
        })
    }
}


// REMOVE_EXPENSE
export const removeExpense = ({id} = {}) => ({
    type: 'REMOVE_EXPENSE',
    id
})


// startRemoveExpense
export const startRemoveExpense = ({ id } = {}) => {
    return (dispatch) => {
        return remove(ref(db, `expenses/${id}`)).then(() => {
            dispatch(removeExpense({ id }))
        })
    }
}

// EDIT_EXPENSE
export const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
})


// SET_EXPENSES
export const setExpenses = (expenses) => ({
    type: 'SET_EXPENSES',
    expenses
})


// startSetExpenses
export const startSetExpenses = () => {
    return (dispatch) => {
        return get(child(ref(db), 'expenses')).then((snapshot) => {
            const expenses = []
            snapshot.forEach((childSnapshot) => {
                expenses.push({
                    id: childSnapshot.key,
                    ...childSnapshot.val()
                })
            })
            dispatch(setExpenses(expenses))
        })
    }
}