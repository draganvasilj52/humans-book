import {initializeApp} from 'firebase/app'
import {getFirestore} from 'firebase/firestore'
import {getAuth} from 'firebase/auth';


const firebaseConfig = {
    apiKey: 'AIzaSyAXcyui50Pq93kExeU6v2xIgAdsadhMyK4',
    authDomain: 'humansbook-46f17.firebaseapp.com',
    projectId: 'humansbook-46f17',
    storageBucket: 'humansbook-46f17.appspot.com',
    messagingSenderId: '627903638627',
    appId: '1:627903638627:web:58e2d1a4f27161fff39c56',
}

const firebaseApp = initializeApp(firebaseConfig)
export const db = getFirestore(firebaseApp)
export const authentication = getAuth(firebaseApp);
