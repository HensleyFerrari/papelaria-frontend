import axios from 'axios'
import React, { useState } from 'react'

function Create() {
    const [solicitante, setSolicitante] = useState('')
    const [descricao, setDescricao] = useState('')
    const [valor, setValor] = useState()

    const submit = () => {
        axios.post('http://localhost:3003/api/produtos', {
            solicitante, descricao, valor
        }).then(() => {
            window.location.reload()
        })
    }

    const clear = () => {
        setSolicitante('')
        setDescricao('')
        setValor()
    }


    return (
        <div className='shadow-lg mb-5 p-3 flex flex-row gap-5 items-center justify-around'>
            <div>
                <span>Solicitante</span>
                <input type="text" className='border-b ml-1 outline-none text-gray-400' value={solicitante}
                    onChange={e => setSolicitante(e.target.value)} required />
            </div>
            <div>
                <span>Descrição</span>
                <input type="text" className='border-b ml-1 outline-none text-gray-400' value={descricao}
                    onChange={e => setDescricao(e.target.value)} required />
            </div>
            <div>
                <span>Valor</span>
                <input type="number" className='border-b ml-1 outline-none text-gray-400' value={valor}
                    onChange={e => setValor(e.target.value)} required />
            </div>
            <div><button className='bg-purple-200 px-4 py-2 rounded-md hover:bg-purple-400'
                onClick={submit}>Enviar</button></div>
        </div>
    )
}

export default Create
