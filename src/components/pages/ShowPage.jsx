import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

function ShowPage() {
    const [item, setItem] = useState({})
    const { id } = useParams()

    useEffect(() => {
        axios.get(`http://localhost:3003/api/produtos/${id}`)
            .then(resp => {
                setItem(resp.data)
            })
    }, [])

    return (
        <div>
            {item.solicitante}
            {item.descricao}
            {item.valor}
        </div>
    )
}

export default ShowPage
