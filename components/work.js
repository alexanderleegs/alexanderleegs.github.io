import {Button, Modal, Image, Container, Row, Col} from 'react-bootstrap';
import {useState} from'react'

import styles from './work.module.css'
import utilStyles from '../styles/utils.module.css'

export default function Work(props) {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const name= props.name
    const img= props.img
    const text= props.text
    const caption= props.caption
    const date= props.date
    const short= props.short
  
    return (
      <>
        <Button variant='link' className={styles.circle} onClick={handleShow}>
          <Image className={styles.btnimg} src={img}/>
        </Button>
        <section className={utilStyles.padding2rem}>
          <h2>{caption}</h2>
          <h4>{date}</h4>
          <p>{short}</p>
          </section>
  
        <Modal size="lg" show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Container className='text-center'>
              <Modal.Title>{caption}</Modal.Title>
            </Container>
          </Modal.Header>
          <Modal.Body>
            <Container className={styles.innerimg}>
              <Image src={img} className={styles.innerbtnimg}/>
            </Container>
            <Container className={utilStyles.padding2rem}>
              {text}
            </Container>
            </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }