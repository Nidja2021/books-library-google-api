import React from 'react'
import { Modal, Button } from 'react-bootstrap'

export default function BookModal({ show, setShow, item }) {

    const handleClose = () => {
        setShow(false)
    }

    return (
        <Modal size='lg' show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <div>
                    <Modal.Title>{item.title}</Modal.Title>
                    <h6>{item.subtitle}</h6>
                </div>

            </Modal.Header>
            <Modal.Body className='d-flex flex-column align-items-center'>

                <img src={item.imageLinks.thumbnail} alt="" />
                <p><strong>Authors:</strong> {item.authors}</p>
                <p><strong>Publish Date:</strong> {item.publishedDate}</p>
                <p><strong>Publish Date:</strong> {item.publishedDate}</p>
                <p><strong>Publisher:</strong> {item.publisher}</p>
                <p><strong>Category:</strong> {item.categories}</p>
                <p>{item.description}</p>
            </Modal.Body>
            <Modal.Footer className='d-flex justify-content-between'>
                <a href={item.infoLink} target="_blank" className='d-flex align-items-center'>
                    <i className="fa-solid fa-arrow-up-right-from-square p-1" ></i>Info Link
                </a>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    )
}
