import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Fetch(Url, info) {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');


    const fetchData = async () => {
        setLoading(true)
        try {
            const res = await fetch(Url,
                {
                    method: 'POST',
                    body: JSON.stringify(info),
                    headers: {
                        'Content-Type': 'application/json',
                    }
                }
            );
            let data = await res.json();
            setProducts(data);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    }
    useEffect(() => {
        fetchData()
    }, [Url]);



    return [products,
        loading,
        error]
}

export default Fetch