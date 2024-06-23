import {createStore} from 'redux'

const incrementCount = ({incrementBy = 1} = {}) => {
    return {
        type: 'INCREMENT',
        incrementBy: incrementBy

    }
}

const decrementCount = ({ decrementBy = 1 } = {}) => {
    return {
        type: 'DECREMENT',
        decrementBy: decrementBy
    }
}
const setCount = ({ setValue }) => ({
    type: 'SET',
    setValue: setValue
})

const resetCount = () => {
    return {
        type: 'RESET'
    }
}

const countReducer = (state = {count: 0}, action) => {

    // const increment = typeof action.incrementBy === 'number' ? action.incrementBy : 1
    // const decrement = typeof action.decrementBy === 'number' ? action.decrementBy : 1
    switch(action.type) {
        case 'INCREMENT':
            return {
                count: state.count + action.incrementBy
            }
        case 'DECREMENT':
            return {
                count: state.count - action.decrementBy
            }
        case 'RESET':
            return {
                count: 0
            }
        case 'SET':
            return {
                count: action.setValue
            }
        default:
            return state
    }

    return state
}

const store = createStore(countReducer)

const unsubscribe = store.subscribe(() => {
    console.log(store.getState())
})

// store.dispatch({
//     type: 'INCREMENT',
//     incrementBy: 5
// })

store.dispatch(incrementCount({ incrementBy: 5 }))

store.dispatch(incrementCount())

store.dispatch(decrementCount())

store.dispatch(decrementCount({ decrementBy: 10 }))

store.dispatch(setCount({setValue: 100}))

store.dispatch(resetCount())