import {  
  useEffect 
} from "react";

import { useDispatch } from "react-redux";

import { 
  onAuthStateChangedListener, 
  createUserDocumentFromAuth 
} from './utils/firebase/firebase';

import { createAction } from "./utils/reducer/reducer";
import { Routes, Route } from 'react-router-dom';
import Navigation from './components/routes/home/navigation/navigationComponent';
import Home from "./components/routes/home/homeComponent";
import Authentication from './components/routes/authentication/Authentication';
import Shop from './components/routes/shop/shop';
import CheckOut from './components/routes/checkout/CheckOut';
import { setCurrentUser } from './store/user/UserAction';

const App = () => {
  const dispatch = useDispatch();
  
  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
        if(user) {
            createUserDocumentFromAuth(user);
        }
        dispatch(setCurrentUser(user));
        
    });

    return unsubscribe;
  }, []);

  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path='shop/*' element={<Shop />} />
        <Route path='auth' element={<Authentication />} />
        <Route path='checkout' element={<CheckOut />} />
      </Route>
    </Routes> 
  );
};

export default App;
