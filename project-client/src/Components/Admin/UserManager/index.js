import React from 'react'
import './style.scss'
import TableUser from '../Common/TableUser'
import Pagination from '../Common/Pagination'

const UserManager = () => {
    return (
        <div>
            <TableUser></TableUser>
            <Pagination></Pagination>
        </div>
    )
}

export default UserManager
