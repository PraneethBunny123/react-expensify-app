// // object destructuring

// const book = {
//     title: 'Ego is the enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         name: 'penguin'
//     }
// }

// const {name: publisherName = 'self-published'} = book.publisher

// console.log(publisherName)

// // array destructuring
const address = ['1515 ennis joslin', 'corpus christi', 'texas', '78412']

const [, city, state, zip] = address

console.log(`you are in ${city} in ${state}`)

const item = ['coffee', '$2.00', '$2.50', '$2.75']
const [order, ,medPrice] = item

console.log(`A medium ${order} costs ${medPrice}`)