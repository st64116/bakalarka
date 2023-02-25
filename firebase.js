import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import { getAuth, createUserWithEmailAndPassword  } from "firebase/auth";
import firebaseConfig from './firebaseConfig';

let app;

export const getApp = ()=>{
    if (!app) {
        app = initializeApp(firebaseConfig);
      }
      return app;
}

const getAuthObj = () => {
    return getAuth(getApp());
}

const getDb = () =>{
    getFirestore(getApp());
}

// const db = getFirestore(getApp());
// const auth = getAuth(getApp());

async function getUsers(db){
    const usersCol = collection(db, 'users');
    const usersSnapshot = await getDocs(usersCol);
    const usersList = usersSnapshot.docs.map(doc => doc.dta());
    return usersList;
}

export {getAuthObj, getDb}