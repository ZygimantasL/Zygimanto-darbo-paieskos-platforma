import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { Home } from './pages/Home';
import { NoPage } from './pages/404';
import { PublicLayout } from './layout/Publiclayout';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route Component={PublicLayout}>
        <Route index path='/' element={<Home />}/>
        <Route index path='*' element={<NoPage />}/>
        </Route>  
      </Routes>
    </BrowserRouter>
        );
}

export default App;
