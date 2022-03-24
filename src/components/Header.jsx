import React, { useRef } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Header({ setQuery }) {

    const search = useRef()

    const handleClick = () => {
        if (search.current.value === "") {
            toast("You need to fill input!")
            setQuery("")
        }
        setQuery(search.current.value)
    }

    return (
        <div className='header'>
            <input
                type="text"
                placeholder='Javascript...'
                className='input-search'
                ref={search}
            />
            <button
                className="btn-search"
                onClick={handleClick}
            >SEARCH</button>
            <ToastContainer />
        </div>
    )
}
