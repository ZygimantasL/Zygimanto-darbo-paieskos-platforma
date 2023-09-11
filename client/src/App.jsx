import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { ContextWrapper } from "./context/GlobalContext";
import { PublicLayout } from './layout/PublicLayout';
import { Home } from './pages/Home';
import { Register } from './pages/Register';
import { Login } from './pages/Login'; 
import { NoPage } from './pages/404';

function App() {
  return (
    <ContextWrapper>
    <BrowserRouter>
      <Routes>
        <Route Component={PublicLayout}>
        <Route index path='/' element={<Home />}/>
        <Route index path='/register' element={<Register />}/>
        <Route index path='/login' element={<Login />}/>
        <Route index path='*' element={<NoPage />}/>
        </Route>  
      </Routes>
    </BrowserRouter>
    </ContextWrapper>
        );
}

export default App;
