import ScrollToTop from './components/ScrollTop';
import WebsiteLayout from './layouts/WebsiteLayout';
import HeroPage from './pages/HeroPage';
import Cities from './pages/Cities';
import NewCity from './pages/NewCity';
import City from './components/City';
import UnderConstruction from './components/UnderConstruction';
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  return (
  <BrowserRouter>
    <ScrollToTop />
    <WebsiteLayout>
      <Routes>
          <Route path='/' element={<HeroPage />} />
          <Route path='/*' element={<UnderConstruction />} />
          <Route path='/cities' element={<Cities />} />
          <Route path='/city' element={<City />} />
          <Route path='/newcity' element={<NewCity />} />
      </Routes>
    </WebsiteLayout>
  </BrowserRouter>
    );
}

export default App;
