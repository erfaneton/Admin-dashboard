import React from 'react'
import './Products.css'
import { useState } from 'react'
import { Products, userRows } from '../../datas'
import { DataGrid } from '@mui/x-data-grid';
import { Link } from 'react-router-dom';
import { DeleteOutlined } from '@mui/icons-material';

export default function UsersList() {

    const [productsData, setProductsData] = useState(Products)

    const productsDelete = productID => {
        setproductsData(productsData.filter(product => product.id != productID))
    }

    const columns = [
        {
            field: 'id',
            headerName: 'ID',
            width: 90
        },
        {
            field: 'title',
            headerName: 'Name',
            width: 200,
            renderCell: (params) => {
                return (
                    <Link to={`/product/${params.row.id}`} className='link'>
                        <div className="userListUser">
                            <img src={params.row.avatar} alt="" className='userListImg' />
                            {params.row.title}
                        </div>
                    </Link>
                )
            }
        },
        {
            field: 'price',
            headerName: 'Price',
            width: 120
        },
        {
            field: 'action',
            headerName: 'Action',
            width: 150,
            renderCell: (params) => {
                return (
                    <>
                        <Link to={`/product/${params.row.id}`}
                            className='Link'>
                            <button className='userListEdit'>Edit</button>
                        </Link>
                        <DeleteOutlined
                            className='userListDelete'
                            onClick={() => productDelete(params.row.id)} />

                    </>

                )
            }
        }
    ]

    return (
        <div className='userList'>
            <DataGrid
                rows={productsData}
                columns={columns}
                disableRowSelectionOnClick
            />
        </div>
    );
}
