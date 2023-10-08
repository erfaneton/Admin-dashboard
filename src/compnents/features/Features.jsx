import React from 'react'
import './Features.css'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
export default function Features() {


    return (
        <div className='features'>
            <div className='featuresItem'>
                <span className='featuresTitle'>Revanue</span>
                <div className="featuresContainer">
                    <span className="featureMoney">$2,415</span>
                    <span className="featureRate">-11.4 <ArrowDownwardIcon className='featuresIcon negative' /></span>
                </div>
                <span className='featureSub'>Compared to last mount</span>
            </div>
            <div className='featuresItem'>
                <span className='featuresTitle'>Sales</span>
                <div className="featuresContainer">
                    <span className="featureMoney">$3,877</span>
                    <span className="featureRate">-1.4 <ArrowDownwardIcon className='featuresIcon negative' /></span>
                </div>
                <span className='featureSub'>Compared to last mount</span>
            </div>
            <div className='featuresItem'>
                <span className='featuresTitle'>Cost</span>
                <div className="featuresContainer">
                    <span className="featureMoney">$2,225</span>
                    <span className="featureRate">+2.4 <ArrowUpwardIcon className='featuresIcon' /></span>
                </div>
                <span className='featureSub'>Compared to last mount</span>
            </div>
        </div>
    )
}
