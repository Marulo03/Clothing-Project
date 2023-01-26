import { Routes, Route } from 'react-router-dom';
import Navigation from './components/routes/home/navigation/navigationComponent';
import Home from "./components/routes/home/homeComponent";
import SignIn from './components/routes/signIn/SignIn';

const Shop = () => {
  return <h1>Shop Page</h1>
}

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path='shop' element={<Shop />} />
        <Route path='signIn' element={<SignIn />} />
      </Route>
    </Routes> 
  );
};

export default App;
