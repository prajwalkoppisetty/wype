import '../app/globals.css';
import Navbar from '@/components/Navbar';
import Slider from '@/components/SliderComponent';
import Homepage from '@/components/Homepage';
import Services from '@/components/Services';

function App() {
  // Check window width to determine if the device is mobile
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 900;

  return (
    <div className='APP'>
      <Navbar />
      {isMobile ? <Homepage /> : <Slider />} {/* Conditionally render components based on screen size */}
      <Services /> {/* Add your services component here */}
    </div>
  );
}

export default App;
