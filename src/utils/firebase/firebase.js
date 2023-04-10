import  { initializeApp } from 'firebase/app';
import { getAuth,
     signInWithRedirect, 
     signInWithPopup, 
     GoogleAuthProvider,
     createUserWithEmailAndPassword,
     signInWithEmailAndPassword,
     signOut,
     onAuthStateChanged
} from 'firebase/auth';

import {
    getFirestore,
    doc,
    getDoc,
    setDoc,
    collection,
    writeBatch,
    query,
    getDocs
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

  //First, create the Google provider

  const googleprovider = new GoogleAuthProvider();

  //setCustomParameters is gonna tell the API how to behave 
  //So in this case is gonna force the user the choose an account

  googleprovider.setCustomParameters({
    prompt: "select_account"
  });

  //Create and export the auth using getAuth()

  export const auth = getAuth();

  //Create and export signInWithGooglePopup
  //You need to pass it the auth and the provider as parameters
  //After this, go to firebase web site and in Authentication
  //Enable Google in Sign In methods 

  export const signInWithGooglePopup = () => signInWithPopup(auth, googleprovider);

  export const signInWithGoogleRedirect = () => signInWithRedirect(auth, googleprovider);

  //Create the db using getFirestore()

  export const db = getFirestore();

  export const addCollectionAndDocuments = async(collectionKey, objectsToAdd) => {
    const collectionRef = collection(db, collectionKey);
    const batch = writeBatch(db);

    objectsToAdd.forEach((object) => {
      const docRef = doc(collectionRef, object.title.toLowerCase());
      batch.set(docRef, object);
    });

    await batch.commit();
    console.log('done');
  }

  export const getCategoriesAndDocuments = async() => {
    const collectionRef = collection(db, 'categories');
    const q = query(collectionRef);

    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map(docSnapshot => docSnapshot.data());
  }

  //Create the createUserDocumentFromAuth method that receives
  //userAuthentication data and store it inside of firestore (the database)

  export const createUserDocumentFromAuth = async (userAuth, additionalInformation = {}) => {
    
    if (!userAuth) return;
    const userDocRef = doc(db, 'users', userAuth.uid);

    // console.log(userDocRef);

    const userSnapshot = await getDoc(userDocRef);
    // console.log(userSnapshot);
    // console.log(userSnapshot.exists());

    //if user data does not exists
    //create / set the document with the data from userAuth in my collection 

    if(!userSnapshot.exists()) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt,
                ...additionalInformation
            });
        } catch (error) {
            alert('error creating user');
            console.log(error.message);
        }
    }
    //if user data exists

    return userDocRef;

    //return userDocRef

  };

  export const createAuthUserWithEmailAndPassword = async(email, password) => {
    if(!email || !password) return;
    return await createUserWithEmailAndPassword(auth, email, password);
  }

  export const signInAuthUserWithEmailAndPassword = async(email, password) => {
    if(!email || !password) return;
    return await signInWithEmailAndPassword(auth, email, password);
  }

  export const signOutUser = async() => await signOut(auth);

  //This function keeps track on the AuthState, that means that is gonna now if
  //the user signs in or signs out

  export const onAuthStateChangedListener = (callback) => 
  onAuthStateChanged(auth, callback);