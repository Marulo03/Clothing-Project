import { Routes, Route } from 'react-router-dom';
import Navigation from './components/routes/home/navigation/navigationComponent';
import Home from "./components/routes/home/homeComponent";
import Authentication from './components/routes/authentication/Authentication';

const Shop = () => {
  return <h1>Shop Page</h1>
}

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path='shop' element={<Shop />} />
        <Route path='auth' element={<Authentication />} />
      </Route>
    </Routes> 
  );
};

export default App;
