// import firebase from "firebase"
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, set, update, remove, onValue, push, get, child } from "firebase/database";
import { GoogleAuthProvider, getAuth, onAuthStateChanged, signInWithPopup, signOut } from 'firebase/auth'

const config = {
    apiKey: "AIzaSyBefmpsIG2ARW6w76OJRVdV2u0J4yLKMNc",
    authDomain: "expensify-app-f40b6.firebaseapp.com",
    databaseURL: "https://expensify-app-f40b6-default-rtdb.firebaseio.com",
    projectId: "expensify-app-f40b6",
    storageBucket: "expensify-app-f40b6.appspot.com",
    messagingSenderId: "977060829389",
    appId: "1:977060829389:web:6f0251c7520961924eb184",
    measurementId: "G-5LBZJGTXB9"
}

const app = initializeApp(config);
const db = getDatabase()
const auth = getAuth(app)

const googleAuthProvider = new GoogleAuthProvider()


export { ref, push, onValue, get, child, remove, update, db as default }
export { auth, googleAuthProvider, onAuthStateChanged, signInWithPopup, signOut }

///////////////////////////////////////////////////////////////////////////////////////

// set(ref(db), {
//     name: 'Praneeth',
//     age: 24,
//     isSingle: true,
//     stresslevel: 6,
//     job: {
//         title: 'software developer',
//         company: 'google'
//     },
//     location: {
//         city: 'corpus',
//         country: 'usa'
//     }
// }).then(() => {
//     console.log('data is saved')
// }).catch((e) => {
//     console.log('this failed. ', e)
// })

// update(ref(db), {
//     attributes: {
//         height: 100,
//         weight: 135
//     }
// })

// set(ref(db, 'attributes'), {
//     color: 'black',
//     gender: 'male'
// }).then(() => {
//     console.log("attributes added")
// }).catch((e) => {
//     console.log('failed. ', e)
// })

// remove(ref(db, 'isSingle')).then(() => {
//     console.log('isSingle is removed successfully')
// }).catch((e) => {
//     console.log('error: ', e)
// })

// update(ref(db), {
//     name: 'Bunny',
//     isSingle: null,
//     'location/city': 'dallas'
// })

// update(ref(db), {
//     stresslevel: 9,
//     'job/company': 'microsoft',
//     'location/city': 'seattle'
// })


// set(ref(db), {
//     name: 'Bunny',
//     job: {
//         title: 'software developer',
//         comapany: 'amazon'
//     }
// })

// const onValueChange = (snapshot) => { 
//     const val = snapshot.val()
//     console.log(`${val.name} is a ${val.job.title} at ${val.job.comapany}.`)
// }

// onValue(ref(db), onValueChange)

// push(ref(db, 'notes'), {
//     title: 'note 2',
//     body: 'this hesris note 2'
// })

// const onValueChange = (dataSnapshot) => {
//     const expenses = []
//     dataSnapshot.forEach((childSnapshot) => {
//         expenses.push({
//             id: childSnapshot.key,
//             ...childSnapshot.val()
//         })
//     })
//     console.log(expenses)
// }

// onValue(ref(db, 'notes'), onValueChange)

////////////////////////////////////////////////////////////////////////////////////