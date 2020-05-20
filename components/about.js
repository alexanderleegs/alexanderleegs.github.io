import {Container, Row, Col} from 'react-bootstrap';
import utilStyles from '../styles/utils.module.css'
import styles from './about.module.css'

const About = () => (
    <Container fluid id='about' className={styles.about}>
        <Row style={{paddingTop:'10rem'}}>
        <Col className='sm-12 text-center'>
            <section>
            <h2 className={utilStyles.heading2Xl}>Alexander Lee</h2>
            </section>
            </Col>
        </Row>
        <Row>
        <Col className='sm-12 text-center' className={utilStyles.desc}>
            <p>
            Hello! My name is Alexander (or Alex). I studied Computing Science at the National University of Singapore.
            </p>
            <p>
            I enjoy reading and am always looking to learn something new.
            </p>
        </Col>
        </Row>
    </Container>
)

export default About