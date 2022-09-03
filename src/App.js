import ScrollToTop from './components/ScrollTop';
import WebsiteLayout from './layouts/WebsiteLayout';
import HeroPage from './pages/HeroPage';
import Cities from './pages/Cities';
import NewCity from './pages/NewCity';
import City from './components/City';
import EditCity from './pages/EditCity';
import UnderConstruction from './components/UnderConstruction';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <WebsiteLayout>
        <Routes>
            <Route path='/' element={<HeroPage />} />
            <Route path='/*' element={<UnderConstruction />} />
            <Route path='/cities' element={<Cities />} />
            <Route path='/city/:id' element={<City />} />
            <Route path='/newcity' element={<NewCity />} />
            <Route path='/editcity' element={<EditCity />} />
        </Routes>
      </WebsiteLayout>
    </BrowserRouter>
  );
}

export default App;
