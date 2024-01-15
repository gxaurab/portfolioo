import './App.css';
import NavBar from './Components/NavBar/NavBar';
import Banner from './Components/Banner/Banner';

import Projects from './Components/Projects/Projects';
import 'bootstrap/dist/css/bootstrap.min.css';
import Blogs from './Components/Blogs/Blogs';
import Contact from './Components/ContactForm/Contact';
import Footer from './Components/Footer/footer';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <Projects/>
      <Blogs/>
      <Contact/>
      <Footer/>

    </div>
  );
}

export default App;
