import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';
import moment from 'moment';

test('should set default state', () => {
    const state = expensesReducer(undefined, {type: '@@INIT'})
    expect(state).toEqual([])
})

test('should remove expense by id', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: expenses[1].id
    }
    const state = expensesReducer(expenses, action)
    expect(state).toEqual([
        expenses[0], expenses[2]
    ])
})

test('should not remove expense if id not found', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: '4'
    }
    const state = expensesReducer(expenses, action)
    expect(state).toEqual(expenses)
})

test('should add expense to the expenses', () => {
    const expense = {
        id: '4',
        description: 'wifi',
        note: '',
        amount: 6500,
        createdAt: 0
    }
    const action = {
        type: 'ADD_EXPENSE',
        expense
    }
    expect(expensesReducer(expenses, action)).toEqual([...expenses, expense])
})

test('should edit expense', () => {
    const updates = {
        id: '4',
        description: 'heb',
        note: '',
        amount: 14200,
        createdAt: moment(0).subtract(4, 'days').valueOf()
    }
    const action = {
        type: 'EDIT_EXPENSE',
        id: expenses[1].id,
        updates
    }
    expect(expensesReducer(expenses, action)).toEqual([
       expenses[0], updates, expenses[2]
    ])
})

test('should not edit expense if expense not found', () => {
    const updates = {
        id: '5',
        description: 'heb',
        note: '',
        amount: 14200,
        createdAt: moment(0).subtract(4, 'days').valueOf()
    }
    const action = {
        type: 'EDIT_EXPENSE',
        id: '4',
        updates
    }
    expect(expensesReducer(expenses, action)).toEqual(expenses)
})






