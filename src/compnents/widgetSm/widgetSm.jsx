import React from 'react'
import './widgetSm.css'
import VisibilityIcon from '@mui/icons-material/Visibility';
import { newMembers } from '../../datas';
export default function WidgetSm() {
    return (
        <div className='widgetSm'>
            <span className="widgetSmTitleTop">New Join Members</span>
            <ul className="widgetSmList">
                {newMembers.map((user) => (
                    <li key={user.id} className="widgetSmListItem">
                        <img src={user.img} alt="" className='widgetSmImg' />
                        <div className="widgetSmUser">
                            <span className="widgetSmUserName">
                                {user.username}
                            </span>
                            <span className="widgetSmTitle">{user.title}</span>
                        </div>
                        <button className='widgetSmButton'>
                            <VisibilityIcon className='widgetSmIcon' />
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    )
}
