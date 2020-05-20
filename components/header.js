import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload } from '@fortawesome/free-solid-svg-icons'

import {Navbar, Nav} from 'react-bootstrap';

const Header = () => (
    <div>
        <Navbar id='mynav' bg='dark' fixed='top' expand='lg' variant='dark'> 
            <Navbar.Brand href="#about">Alexander Lee</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className='ml-auto'>
                    <Nav.Link href="#work">Work Experience</Nav.Link>
                    <Nav.Link href="#portfolio">Portfolio</Nav.Link>
                    <Nav.Link href="https://www.dropbox.com/s/00h3aim1xtzol8s/Lee%20Guo%20Sheng%20Alexander.pdf?dl=0"><FontAwesomeIcon icon={faDownload} />Resume</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    </div>
);

export default Header;

// const NavBar = () => (
//     <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
//         <div class="container">
//             <a class="navbar-brand" href="#">Alexander Lee</a>
//             <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
//                 <span class="navbar-toggler-icon"></span>
//             </button>
//             <div class="collapse navbar-collapse" id="navbarNav">
//                 <ul class="navbar-nav ml-auto">
//                 <li class="nav-item">
//                     <a class="nav-link" href="#">About</a>
//                 </li>
//                 <li class="nav-item">
//                     <a class="nav-link" href="#">Work Experience</a>
//                 </li>
//                 <li class="nav-item">
//                     <a class="nav-link" href="#">Portfolio</a>
//                 </li>
//                 <li class="nav-item">
//                     <a class="nav-link" href="#"><FontAwesomeIcon icon={faDownload} />Resume</a>
//                 </li>
//                 </ul>
//             </div>
//         </div>
//     </nav>
// );