import React from 'react'
import './Topbar.css'
import NotificationsIcon from '@mui/icons-material/Notifications';
import LanguageIcon from '@mui/icons-material/Language';
import SettingsIcon from '@mui/icons-material/Settings';
export default function Topbar() {
    return (
        <div className='topbar'>
            <div className='topbarWrapper'>
                <div className="topleft">
                    <span className='logo'> EFN</span>
                </div>
                <div className="topright">
                    <div className="topbarIconscontainer">
                        <NotificationsIcon />
                        <span className='topIconBadge'>2</span>
                    </div>
                    <div className="topbarIconscontainer">
                        <LanguageIcon />
                        <span className='topIconBadge'>2</span>
                    </div>
                    <div className="topbarIconscontainer">
                        <SettingsIcon />
                    </div>
                    <img className='topAvatar' src="/images/me.jpg" alt="" />
                </div>

            </div>
        </div>
    )
}
