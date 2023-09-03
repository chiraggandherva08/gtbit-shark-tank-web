import './App.css';
import NavBar from './nav/NavBar';
import Banner from './hero/Banner';
import ContactUs from './contactus/ContactUs';

function App() {
  return (
      <div className="App">
        <NavBar/>
        <Banner/>
        <ContactUs/>
      </div>
  );
}

export default App;
