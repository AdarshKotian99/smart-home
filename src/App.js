import './style.css'
import Navbar from './components/NavbarComp'
import Banner from './components/Banner';
import SearchComp from './components/SearchComp';
import CarouselElement from './components/Carousel';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar/>
      <Banner/>
      <SearchComp/>
      <CarouselElement/>
      <Footer/>
    </> 
  );
}

export default App;
