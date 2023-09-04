import { Outlet } from 'react-router-dom'

import './Layout.scss'
import React, { memo } from 'react'
import { Dashboard, Header } from '../../Components'

function Layout({ children }) {
    return (
        <div className='layout'>
            <Dashboard />
            <div className='layout_right'>
                <Header />
                <div>
                    {children}
                </div>
            </div>
        </div>
    )
}

export default memo(Layout)