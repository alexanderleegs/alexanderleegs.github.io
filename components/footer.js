import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons'

import {Container, Row, Col} from 'react-bootstrap';

const Footer = () => (
    <footer>
        <Container fluid style={{backgroundColor:'black', paddingTop:0}}>
            <Row className="justify-content-sm-center">
                <ul style={{listStyleType:'none', margin:'0', padding:'0'}}>
                    <li style={{display:'inline', margin:'0', padding:'0'}}><a style={{fontSize:'20px', color:'white'}}href="https://github.com/alexanderleegs"><FontAwesomeIcon icon={faGithub} /> </a> </li>
                    <li style={{display:'inline', margin:'0', padding:'0'}}><a style={{fontSize:'20px',color:'white'}}href="https://www.linkedin.com/in/alexander-lee-a15040185/"><FontAwesomeIcon icon={faLinkedin} /> </a> </li>
                </ul>
            </Row>
            <Row className="justify-content-sm-center" >
                <p style={{color:'gray', fontSize:'10px'}}>&copy; 2020 Lee Guo Sheng Alexander</p>
            </Row>
        </Container>
    </footer>
)

export default Footer;