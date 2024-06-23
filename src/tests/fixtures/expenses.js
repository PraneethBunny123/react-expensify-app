import moment from "moment";

const expenses = [{
    id: '1',
    description: 'Gum',
    note: '',
    amount: 150,
    createdAt: 0
}, {
    id: '2',
    description: 'Rent',
    note: '',
    amount: 20000,
    createdAt: moment(0).subtract(4, 'days').valueOf()
}, {
    id: '3',
    description: 'Credit Card',
    note: '',
    amount: 1000,
    createdAt: moment(0).add(4, 'days').valueOf()
}]

export default expenses;