import CarouselEvents from './components/CarouselEvents';
import UnderConstruction from './components/UnderConstruction';
import WebsiteLayout from './layouts/WebsiteLayout';
import HeroPage from './pages/HeroPage';

function App() {
  return (
  <div>
    <WebsiteLayout>
      <HeroPage />
      <CarouselEvents />
      <UnderConstruction />
    </WebsiteLayout>
  </div>
    );
}

export default App;
