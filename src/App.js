import React, { useRef } from 'react';
import './App.css';
import Banner from './Components/Banner/Banner';
import Projects from './Components/Projects/Projects';
import 'bootstrap/dist/css/bootstrap.min.css';
import Blogs from './Components/Blogs/Blogs';
import Contact from './Components/ContactForm/Contact';
import Footer from './Components/Footer/footer';
import NavBar from './Components/NavBar/NavBar';

function App() {
  const bannerRef = useRef(null);
  const projectsRef = useRef(null);
  const blogsRef = useRef(null);
  const contactRef = useRef(null);

  return (
    <div className="App">
      <NavBar
        bannerRef={bannerRef}
        projectsRef={projectsRef}
        blogsRef={blogsRef}
        contactRef={contactRef}
      />
      <div ref={bannerRef}><Banner/></div>
      <div ref={projectsRef}><Projects/></div>
      <div ref={blogsRef}><Blogs/></div>
      <div ref={contactRef}><Contact/></div>
      <Footer/>
    </div>
  );
}
export default App;
