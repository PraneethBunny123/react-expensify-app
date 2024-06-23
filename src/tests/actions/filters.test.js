import { setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate } from "../../actions/filters";
import moment from "moment";

test('should setup set text filter for provided value', () => {
    expect(setTextFilter('water')).toEqual({
        type: 'SET_TEXT_FILTER',
        text: 'water'
    })
})

test('should setup set text filter for default value', () => {
    expect(setTextFilter()).toEqual({
        type: 'SET_TEXT_FILTER',
        text: ''
    })
})

test('should setup sort by amount', () => {
    expect(sortByAmount()).toEqual({
        type: 'SORT_BY_AMOUNT'
    })
})

test('should setup sort by date', () => {
    expect(sortByDate()).toEqual({
        type: 'SORT_BY_DATE'
    })
})

test('should setup set start date', () => {
    expect(setStartDate(moment(0))).toEqual({
        type: 'SET_START_DATE',
        startDate: moment(0)
    })
})

test('should setup set end date', () => {
    expect(setEndDate(moment(0))).toEqual({
        type: 'SET_END_DATE',
        endDate: moment(0)
    })
})