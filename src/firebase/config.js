import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyDzFgvyo7WqoxY7vhwZkzJMjDUVOgV6yxc",
    authDomain: "database-genshin-guess.firebaseapp.com",
    projectId: "database-genshin-guess",
    storageBucket: "database-genshin-guess.appspot.com",
    messagingSenderId: "752743980689",
    appId: "1:752743980689:web:1d005a1aaed6034e33a930"
}

//init firebase
initializeApp(firebaseConfig)

//init services
const db = getFirestore()
export { db }