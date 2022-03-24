import React, { useState } from 'react'
import { Card, Button } from 'react-bootstrap'
import BookModal from './BookModal'

export default function CardComponent({ item }) {

    const [show, setShow] = useState(false)

    const handleClick = () => {
        setShow(true)
    }
    return (
        <Card style={{ width: '15rem', height: '25rem' }}>
            <Card.Img variant="top" src={item.imageLinks.thumbnail && item.imageLinks.thumbnail} style={{ height: "50%" }} />
            <Card.Body className="card-body">
                <Card.Title>{item.title.length > 30 ? item.title.substring(0, 30) : item.title}</Card.Title>
                <Card.Subtitle>{item.authors && item.authors.length > 2 ? item.authors.slice(0, 2) : item.authors}</Card.Subtitle>
                <a href={item.infoLink} target="_blank">Info Link</a>
                <Button variant='primary' onClick={handleClick}>Description</Button>
                <BookModal show={show} setShow={setShow} item={item} />
            </Card.Body>
        </Card>


    )
}
