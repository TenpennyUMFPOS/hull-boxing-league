import './App.css';
import MainPage from "./components/main-page/main-page";
import Intro from "./components/introduction/intro";
import About from "./components/about-us/about";
import Location from './components/location/location';
import ContactUs from './components/contact-us/contact-us';

function App() {

  return (
    <>
      <MainPage />
      <Intro />
      <About />
      <Location />
      <ContactUs />
    </>
  );
}

export default App;
