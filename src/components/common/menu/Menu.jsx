import React from 'react'
import { Link } from 'react-router-dom'

function Menu() {
    return (
        <div className='shadow-md mb-5 p-4 flex flex-row gap-5 items-center justify-around bg-purple-300'>
            <span className='font-bold text-2xl'>Papelaria</span>
            <div>
                <Link to='/'>Pagina Inicial</Link>
            </div>
        </div>
    )
}

export default Menu
