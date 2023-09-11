import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { ContextWrapper } from "./context/GlobalContext";
import { Home } from './pages/Home';
import { NoPage } from './pages/404';
import { PublicLayout } from './layout/Publiclayout';

function App() {
  return (
    <ContextWrapper>
    <BrowserRouter>
      <Routes>
        <Route Component={PublicLayout}>
        <Route index path='/' element={<Home />}/>
        <Route index path='/register' element={Register />}/>
        <Route index path='/login' element={<Login />}/>
        <Route index path='*' element={<NoPage />}/>
        </Route>  
      </Routes>
    </BrowserRouter>
    </ContextWrapper>
        );
}

export default App;
