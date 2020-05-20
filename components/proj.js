import {Button, Modal, Image, Container, Row, Col} from 'react-bootstrap';
import Work from '../components/work'

import styles from './proj.module.css'
import utilStyles from '../styles/utils.module.css'

export default function Proj(props) {
    const projs = props.items;
    return (
        <Container id='portfolio' fluid className={styles.container}>
            <Row>
                <Col className='sm-12 text-center'><h2 className={utilStyles.headingXl}>Projects</h2></Col>
            </Row>
            <Row>      
                {projs.map(proj => 
                    <Col className='col-sm-4 text-center'>
                        <div> {<Work 
                        name={proj.name} 
                        img={proj.img} 
                        text={proj.text} 
                        caption={proj.caption}
                        date={proj.date}
                        short={proj.short}/>} </div>
                    </Col>)
                }
            </Row>
        </Container>
    )
}