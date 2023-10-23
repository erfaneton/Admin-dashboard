import React from 'react'
import { Link } from 'react-router-dom'
import './Product.css'
import Chart from '../../compnents/chart/Chart'
import { productsData } from '../../datas'
import PublishIcon from '@mui/icons-material/Publish';


export default function Product() {
    return (
        <div className='product'>
            <div className="productTitleContainer">
                <h1 className="productTitle">Product</h1>
                <Link to={'/newProduct'}>
                    <button className='productAddButton'>
                        Create
                    </button>
                </Link>
            </div>

            <div className="productTop">
                <div className="productTopLeft">
                    <Chart title='Sale In Mount' data={productsData} dataKey='sales' />
                </div>
                <div className="productTopRight">
                    <div className="productInfoTop">
                        <img src="public/images/Dell.jpg" alt="" className="productInfoImg" />
                        <span className="productName">Dell LapTop</span>
                    </div>
                    <div className="productInfoBottom">
                        <div className="productInfoItem">
                            <div className="productInfoKey">ID:</div>
                            <div className="productInfoValue">132</div>
                        </div>
                    </div>
                    <div className="productInfoBottom">
                        <div className="productInfoItem">
                            <div className="productInfoKey">Name:</div>
                            <div className="productInfoValue">Dell Laptop</div>
                        </div>
                    </div>
                    <div className="productInfoBottom">
                        <div className="productInfoItem">
                            <div className="productInfoKey">Sales</div>
                            <div className="productInfoValue">$90.000</div>
                        </div>
                    </div>
                    <div className="productInfoBottom">
                        <div className="productInfoItem">
                            <div className="productInfoKey">In Stock</div>
                            <div className="productInfoValue">No</div>
                        </div>
                    </div>
                    <div className="productInfoBottom">
                        <div className="productInfoItem">
                            <div className="productInfoKey">Active</div>
                            <div className="productInfoValue">Yes</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="productBottom">
                <form className="productForm">
                    <div className="productFormLeft">
                        <label >Product Name</label>
                        <input type="text" placeholder='Dell Laptop' />
                        <label >In Stock</label>
                        <select id="inStock">
                            <option value="yes">Yes</option>
                            <option value="No">No</option>
                        </select>
                        <label>Active</label>
                        <select id="inStock">
                            <option value="yes">Yes</option>
                            <option value="No">No</option>
                        </select>
                    </div>
                    <div className="productFormRight">
                        <div className="productUploader">
                            <img src="public/images/Dell.jpg" alt="" className='productUploaderImg' />
                            <label >
                                <PublishIcon />
                            </label>
                            <input type="file" />
                        </div>
                        <button className='productButton'>Upload </button>
                    </div>
                </form>
            </div>
        </div>
    )
}
