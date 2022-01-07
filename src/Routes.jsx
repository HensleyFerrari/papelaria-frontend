import React from 'react'

import { Routes, Route, Navigate } from 'react-router'

import Home from './components/pages/Home'
import ShowPage from './components/pages/ShowPage'

export default function Router() {
    return (
        <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/:id' element={<ShowPage />} />

            <Route from='*' element={<Navigate to='/' />}/>
        </Routes>
    )
}