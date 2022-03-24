import React, { useState, useEffect } from 'react'
import axios from 'axios'

const useFetchBooks = () => {
    const [query, setQuery] = useState("javascript")
    const [startIndex, setStartIndex] = useState(1)
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState("")


    useEffect(() => {
        const abortSignal = new AbortController();
        setLoading(true)
        axios.get(`https://www.googleapis.com/books/v1/volumes?q=${query}&maxResults=10&startIndex=${startIndex}`,
            { signal: abortSignal.signal })
            .then(response => {
                setData(response.data)
                console.log(response.data.items);
                setLoading(false)
                setError("")
            }).catch(error => {
                setLoading(false)
                setError("Could not find any book with that name...")
                setData([])
            })
        return () => abortSignal.abort()
    }, [query, startIndex]);

    return { setQuery, setStartIndex, data, loading, error }
}

export default useFetchBooks