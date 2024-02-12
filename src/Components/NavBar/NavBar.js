import { Navbar, Container, Nav } from "react-bootstrap";
import './NavBar.css';
import Offcanvas from 'react-bootstrap/Offcanvas';

const NavBar = ({ homeRef, projectsRef, blogsRef, contactRef }) => {
  const scrollToSection = (elementRef) => {
    if (elementRef.current) {
      window.scrollTo({
        top: elementRef.current.offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <div>
      {[false, 'sm', 'md', 'lg', 'xl', 'xxl'].map((expand) => (
        <Navbar key={expand} expand={expand} className="bg-body">
          <Container>
            <Navbar.Brand href="#" className="brand">{"</>"}</Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 linksTo">
                  <Nav.Link href="#home" onClick={() => scrollToSection(homeRef)}>Mee</Nav.Link>
                  <Nav.Link href="#projects" onClick={() => scrollToSection(projectsRef)}>Projects</Nav.Link>
                  <Nav.Link href="#blogs" onClick={() => scrollToSection(blogsRef)}>Blogs</Nav.Link>
                  <Nav.Link href="#contact" onClick={() => scrollToSection(contactRef)}>Find Me</Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </div>
  );
};

export default NavBar;
