import  { initializeApp } from 'firebase/app';
import { getAuth,
     signInWithRedirect, 
     signInWithPopup, 
     GoogleAuthProvider 
} from 'firebase/auth';

import {
    getFirestore,
    doc,
    getDoc,
    setDoc
} from 'firebase/firestore'; 

const firebaseConfig = {
    apiKey: "AIzaSyCibJOhvV2Esq1YnwZZzD65VEuYfQgDxDE",
    authDomain: "clothing-db-3dc1c.firebaseapp.com",
    projectId: "clothing-db-3dc1c",
    storageBucket: "clothing-db-3dc1c.appspot.com",
    messagingSenderId: "580370908704",
    appId: "1:580370908704:web:2c8795bf048febfc089e45"
  };
  
  const firebaseapp = initializeApp(firebaseConfig);

  const provider = new GoogleAuthProvider();
  provider.setCustomParameters({
    prompt: "select_account"
  });

  export const auth = getAuth();
  export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
  export const db = getFirestore();
  export const createUserDocumentFromAuth = async (userAuth) => {
    const userDocRef = doc(db, 'users', userAuth.uid);

    console.log(userDocRef);

    const userSnapshot = await getDoc(userDocRef);
    console.log(userSnapshot);
    console.log(userSnapshot.exists());

    //if user data does not exists
    //create / set the document with the data from userAuth in my collection 

    if(!userSnapshot.exists()) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt
            });
        } catch (error) {
            console.log('error creating user', error.message);
        }
    }
    //if user data exists

    return userDocRef;

    //return userDocRef

  };
