import moment from "moment";
import filtersReducer from "../../reducers/filters";

test('should setup default filter values', () => {
    const state = filtersReducer(undefined, { type: '@@INIT'})
    expect(state).toEqual({
        text: '',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    })
})

test('should set sortBy to amount', () => {
    const state = filtersReducer(undefined, { type: 'SORT_BY_AMOUNT'})
    expect(state.sortBy).toBe('amount')
})

test('should set sortBy to date', () => {
    const currentState = {
        text: '',
        starDate: undefined,
        endDate: undefined,
        sortBy: 'amount'
    }
    const state = filtersReducer(currentState, { type: 'SORT_BY_DATE'})
    expect(state.sortBy).toBe('date')
})

test('should set text filter', () => {
    
    const state = filtersReducer(undefined, { type: 'SET_TEXT_FILTER', text: 'this is my text'})
    expect(state.text).toBe('this is my text')
})

test('should set start date filter', () => {
    
    const state = filtersReducer(undefined, { type: 'SET_START_DATE', startDate: moment(0)})
    expect(state.startDate).toEqual(moment((0)))
})

test('should set end date filter', () => {
    
    const state = filtersReducer(undefined, { type: 'SET_END_DATE', endDate: moment(0)})
    expect(state.endDate).toEqual(moment((0)))
})