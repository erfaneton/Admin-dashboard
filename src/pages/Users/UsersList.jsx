import React from 'react'
import './UsersList.css'
import { useState } from 'react'
import { userRows } from '../../datas'
import { DataGrid } from '@mui/x-data-grid';
import { Link } from 'react-router-dom';
import { DeleteOutlined } from '@mui/icons-material';

export default function UsersList() {

    const [userDatas, setUserDatas] = useState(userRows)

    const userDelete = userID => {
        setUserDatas(userDatas.filter(user => user.id != userID))
    }

    const columns = [
        {
            field: 'id',
            headerName: 'ID',
            width: 90
        },
        {
            field: 'user',
            headerName: 'User',
            width: 200,
            renderCell: (params) => {
                return (
                    <Link to={'/'} className='link'>
                        <div className="userListUser">
                            <img src={params.row.avatar} alt="" className='userListImg' />
                            {params.row.username}
                        </div>
                    </Link>
                )
            }
        },
        {
            field: 'email',
            headerName: 'Email',
            width: 200

        },
        {
            field: 'status',
            headerName: 'Status',
            width: 120
        },
        {
            field: 'transaction',
            headerName: 'Transaction',
            width: 160,
            renderCell: (params) => {
                return (
                    <div>{params.row.TransActions}</div>
                )
            }

        },
        {
            field: 'action',
            headerName: 'Action',
            width: 150,
            renderCell: (params) => {
                return (
                    <>
                        <Link to={`/user/${params.row.id}`}>
                            <button className='userListEdit'>Edit</button>
                        </Link>
                        <DeleteOutlined
                            className='userListDelete'
                            onClick={() => userDelete(params.row.id)} />

                    </>

                )
            }
        }
    ]

    return (
        <div className='userList'>
            <DataGrid
                rows={userDatas}
                columns={columns}
                disableRowSelectionOnClick
                pageSize={2}
            />
        </div>
    );
}
