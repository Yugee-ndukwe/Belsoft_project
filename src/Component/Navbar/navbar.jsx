import './navbar.css';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import LOGO from '../../Assets/images';
import right from '../../Assets/images';
import { useState } from 'react';


export default function MyNav(){
    const [isActive, setIsActive] = useState('')
    return(
        <>
           <Navbar expand="lg" className=" navbar">
                <Container>
                        <Navbar.Brand href="#home" className='nav-logo'><img src={LOGO.LOGO} alt="" />Founder’s Friday</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                     <Navbar.Collapse id="basic-navbar-nav">
                         <Nav className="ms-auto nav">
                            <Nav.Link href="/" className='nav-item active'>Home</Nav.Link>
                            <Nav.Link href="#link">About</Nav.Link>
                            <Nav.Link href="#link">Gallery</Nav.Link>

                            <Nav.Link href="#link">Contact Us</Nav.Link>
                            <div>
                                <button>Register <img src={right.ARROW_RIGHT} alt="" /></button>
                            </div>
                         </Nav>
                     </Navbar.Collapse>
                </Container>
           </Navbar>
        </>
    )
}