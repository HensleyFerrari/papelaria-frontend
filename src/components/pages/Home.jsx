import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import Create from '../common/Create'

function Home() {
    const [lista, setLista] = useState([])

    useEffect(() => {
        axios.get('http://localhost:3003/api/produtos')
            .then(resp => {
                setLista(resp.data)
            })
    }, [])


    const render = () => {
        return lista.map(item => {
            return (
                <tr key={item._id} className='hover:bg-gray-50'>
                    <td className='px-4 py-3'>{item.solicitante}</td>
                    <td className='px-4 py-3'>{item.descricao}</td>
                    <td className='px-4 py-3'>R$ {(item.valor).toFixed(2)}</td>
                    <td><Link to={`/${item._id}`} className='bg-green-200 px-4 py-2 rounded-lg hover:bg-green-400'>Ir para página</Link></td>
                </tr>
            )
        })
    }

    return (
        <>
            <Create />
            <div className='lg:w-2/3 w-full mx-auto overflow-auto'>
                <table className="table-auto w-full text-left whitespace-no-wrap">
                    <thead>
                        <tr>
                            <th className='px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl'>Solicitante</th>
                            <th className='px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100'>Descrição</th>
                            <th className='px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100'>Valor</th>
                            <th className='px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100'>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {render()}
                    </tbody>
                </table>
            </div>
        </>

    )
}

export default Home
