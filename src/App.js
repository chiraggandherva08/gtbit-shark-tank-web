import './App.css';
import NavBar from './nav/NavBar';
import Banner from './hero/Banner';
import ContactUs from './contactus/ContactUs';
import Rules from './rules/Rules';

function App() {
  return (
      <div className="App">
        <NavBar/>
        <Banner/>
        <Rules/>
        <ContactUs/>
      </div>
  );
}

export default App;
