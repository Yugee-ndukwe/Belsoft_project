import './navbar.css';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import LOGO from '../../Assets/images';
import right from '../../Assets/images';
import { useState } from 'react';

export default function MyNav() {
    const [isActive, setIsActive] = useState('home'); // Default active state is 'home'

    return (
        <>
            <Navbar expand="lg" className="navbar">
                <Container>
                    <Navbar.Brand href="#home" className="nav-logo">
                        <img src={LOGO.LOGO} alt="" /> Founder’s Friday
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto nav">
                            <Nav.Link
                                href="/"
                                className={`nav-item ${isActive === 'home' ? 'active' : ''}`}
                                onClick={() => setIsActive('home')}
                            >
                                Home
                            </Nav.Link>
                            <Nav.Link
                                href="#about"
                                className={`nav-item ${isActive === 'about' ? 'active' : ''}`}
                                onClick={() => setIsActive('about')}
                            >
                                About
                            </Nav.Link>
                            <Nav.Link
                                href="#gallery"
                                className={`nav-item ${isActive === 'gallery' ? 'active' : ''}`}
                                onClick={() => setIsActive('gallery')}
                            >
                                Gallery
                            </Nav.Link>
                            <Nav.Link
                                href="#contact"
                                className={`nav-item ${isActive === 'contact' ? 'active' : ''}`}
                                onClick={() => setIsActive('contact')}
                            >
                                Contact Us
                            </Nav.Link>
                            <div>
                                <button>
                                    Register <img src={right.ARROW_RIGHT} alt="" />
                                </button>
                            </div>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}
