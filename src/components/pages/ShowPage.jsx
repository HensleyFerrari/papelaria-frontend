import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'

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
        <div className='container mx-auto md:max-w-screen-xl'>
            <div className='flex justify-between'>
                <span className='text-3xl'>{item.solicitante}</span>
                <span className='text-green-600 font-bold text-3xl'>R$ {item.valor}</span>
            </div>
            <div className="flex flex-col mt-2 h-44">
                <span className='font-semibold mb-2'>Descrição do pedido</span>
                <span>{item.descricao}</span>
            </div>
            <div className='flex justify-between items-center'>
                <div>
                    <Link to='/' className='bg-gray-200 hover:bg-gray-400 px-4 py-2 rounded-md'>Voltar</Link>
                </div>
                <div className='flex gap-2'>
                    <button className='bg-green-200 hover:bg-green-400 px-4 py-2 rounded-md'>Editar</button>
                    <button className='bg-red-200 hover:bg-red-400 px-4 py-2 rounded-md'>Excluir</button>
                </div>
            </div>
        </div>
    )
}

export default ShowPage
