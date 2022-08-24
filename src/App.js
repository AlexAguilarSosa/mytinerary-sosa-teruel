import UnderConstruction from './components/UnderConstruction';
import WebsiteLayout from './layouts/WebsiteLayout';
import HeroPage from './pages/HeroPage';
import Cities from './pages/Cities';
import NewCity from './pages/NewCity';
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  return (
  <BrowserRouter>
    <WebsiteLayout>
      <Routes>
          <Route path='/' element={<HeroPage />} />
          <Route path='/*' element={<UnderConstruction />} />
          <Route path='/cities' element={<Cities />} />
          <Route path='/newcity' element={<NewCity />} />
      </Routes>
    </WebsiteLayout>
  </BrowserRouter>
    );
}

export default App;
