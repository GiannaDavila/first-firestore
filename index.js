import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';

// import our credentials (service account)
import serviceAccount from './serviceAccount.js'
// connect to our firebase project using those credetials 
initializeApp({
    credential: cert(serviceAccount)
})
// connect to firestore database
const db = getFirestore();
// define a new video game:
const newGame = {
    title: 'Frogger',
    rated: 'E',
    genre: 'Aarcade',
    released: 1981,
}
// creat a doc inside a collection 

db.collection('game').add(newGame)
    //  if okay, console.log the doc id 
    .then(doc => console.log('Game created:', doc.id))
    // if not console the error
    .catch(console.error)
// get all games
db.collection('games').get()
    // reshape the collection
    .then(collection => {
        collection.docs.forEach(doc  => {
            console.log(doc.id, doc.data())
        })
    })
    .catch(console.error)