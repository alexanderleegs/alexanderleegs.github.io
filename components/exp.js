import {Button, Modal, Image, Container, Row, Col} from 'react-bootstrap';
import Work from '../components/work'

import styles from './exp.module.css'
import utilStyles from '../styles/utils.module.css'

export default function Exp(props) {
    const works = props.items;
    return (
        <Container id='work' fluid className={styles.container}>
            <Row>
                <Col className='sm-12 text-center'><h2 className={utilStyles.headingXl}>Work Experience</h2></Col>
            </Row>
            <Row>
                {works.map(work => 
                    <Col className='col-sm-4 text-center'>
                        <div> {<Work 
                        name={work.name} 
                        img={work.img} 
                        text={work.text} 
                        caption={work.caption}
                        date={work.date}
                        short={work.short}/>} </div>
                    </Col>)
                }
            </Row>
        </Container>
    )
}