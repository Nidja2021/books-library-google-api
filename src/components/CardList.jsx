import React from 'react'
import CardComponent from './CardComponent'

export default function CardList({ data }) {
    return (
        <div className='card-list'>
            {data && data.map(item => (
                <CardComponent item={item.volumeInfo} key={item.id} />
            ))}
        </div>
    )
}
