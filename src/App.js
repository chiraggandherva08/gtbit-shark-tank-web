import './App.css';
import NavBar from './nav/NavBar';
import Banner from './hero/Banner';
import ContactUs from './contactus/ContactUs';
import Rules from './rules/Rules';
import OurTeam from './our-team/OurTeam';
import Judges from './judges/Judges';

function App() {
  return (
      <div className="App">
        <NavBar/>
        <Banner/>
        <Judges/>
        <OurTeam/>
        <Rules/>
        <ContactUs/>
      </div>
  );
}

export default App;
