import React from 'react'
import { Pagination } from 'react-bootstrap';

export default function PaginationBooks({ totalItems }) {

    const totalButtons = Math.round(totalItems / 10)
    let active = 1;
    let items = [];
    for (let number = 1; number <= totalButtons; number++) {
        items.push(
            <Pagination.Item key={number} active={number === active}>
                {number}
            </Pagination.Item>,
        );
    }
    return (
        <div className="pagination">
            <Pagination>
                <Pagination.First />
                <Pagination.Prev />
                <Pagination.Item active>{1}</Pagination.Item>
                <Pagination.Item>{2}</Pagination.Item>
                <Pagination.Item>{3}</Pagination.Item>
                <Pagination.Item>{4}</Pagination.Item>
                <Pagination.Item>{5}</Pagination.Item>
                <Pagination.Ellipsis />
                <Pagination.Item>{items.length - 4}</Pagination.Item>
                <Pagination.Item>{items.length - 3}</Pagination.Item>
                <Pagination.Item>{items.length - 2}</Pagination.Item>
                <Pagination.Item>{items.length - 1}</Pagination.Item>
                <Pagination.Item>{items.length}</Pagination.Item>
                <Pagination.Next />
                <Pagination.Last />
            </Pagination>
        </div >
    )
}
