import { addExpense, removeExpense, editExpense } from "../../actions/expenses";

test('should setup remove expense action object', () => {
    expect(removeExpense({ id:'123' })).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123'
    })
})

test('should setup edit expense action object', () => {
    expect(editExpense('123', {note: 'new note'})).toEqual({
        type: 'EDIT_EXPENSE',
        id: '123',
        updates: {note: 'new note'}
    })
})

test('should setup add expense action with object with provided values', () => {
    const expenseData = {
        description: 'Rent',
        note:'This is rent',
        amount: 108000, 
        createdAt: 1000
    }
    expect(addExpense(expenseData)).toEqual({
        type: 'ADD_EXPENSE',
        expense: {...expenseData, id: expect.any(String)}
    })
})

test('should setup add expense action with object with default values', () => {
    const expenseDefaultData = {  
        description: '',
        note:'',
        amount: 0, 
        createdAt: 0
    }
    expect(addExpense()).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            id: expect.any(String), ...expenseDefaultData
        }
    })
})