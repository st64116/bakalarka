import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import firebaseConfig from './firebaseConfig';

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);



async function getUsers(db){
    const usersCol = collection(db, 'users');
    const usersSnapshot = await getDocs(usersCol);
    const usersList = usersSnapshot.docs.map(doc => doc.dta());
    return usersList;
}
