import React, { useState } from 'react'
import { Link, Outlet, Navigate } from 'react-router-dom'

function Dashboard() {

    const [isLogin, setIsLogin] = useState(true);

    if (isLogin === false) {
        return <Navigate to='/login' />
    }

    return (
        <div id='dashboard'>
            <div className='container'>
                <h2 className='text-center my-3'>Dashboard Page</h2>
                <div className='row'>
                    <div className='col-md-2'>
                        <ul>
                            <li><Link to='create'>Create User</Link></li>
                            <li><Link to='view-users'>View Users</Link></li>
                            <li><Link to='settings'>Settings</Link></li>
                        </ul>
                    </div>
                    <div className='col-md-10 border bg-primary-subtle'>
                        <h3>main area</h3>
                        <div>
                            <Outlet />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard