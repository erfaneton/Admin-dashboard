import React from 'react'
import './WidgetLg.css'
import { TransActions } from '../../datas'
export default function WidgetLg() {

    const Button = ({ type }) => {
        return <button className={'widgetLgButton ' + type}>{type}</button>
    }


    return (
        <div className='widgetLg'>
            <h3 className="widgetLgTitile">Latest TransActions</h3>
            <table className="widgetLgTable">
                <tr className="widgetLgTr">
                    <th className="widgetLgTh">Customer</th>
                    <th className="widgetLgTh">Data</th>
                    <th className="widgetLgTh">Amount</th>
                    <th className="widgetLgTh">Status</th>
                </tr>
                {TransActions.map((TransActions) => (
                    <tr key={TransActions.id} className="widgetLg">
                        <td className="widgetLgUser">
                            <img src={TransActions.img} alt="" className='widgetLgImg' />
                            <span className="widgetLgName">{TransActions.customer}</span>
                        </td>
                        <td className='widgetLgData'>{TransActions.date}
                        </td>
                        <td className="widgetLgAmount">
                            ${TransActions.amount}
                        </td>
                        <td className="widgetLgStatus">
                            <Button type={TransActions.status} />
                        </td>
                    </tr>
                ))}
            </table>
        </div>
    )
}
