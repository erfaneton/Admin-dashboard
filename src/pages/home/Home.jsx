import React from 'react'
import Features from '../../compnents/features/Features'
import './Home.css'
import Chart from '../../compnents/chart/Chart'
import { xAxisData } from '../../datas'
import WidgetSm from '../../compnents/widgetSm/widgetSm'
import WidgetLg from '../../compnents/widgetLg/WidgetLg'

export default function Home() {
    return (
        <div className="home">
            <Features />
            <Chart grid title='Mount Sale' data={xAxisData} dataKey='sale' />
            <div className="homeWidgets">
                <WidgetSm />
                <WidgetLg />
            </div>
        </div>

    )
}
