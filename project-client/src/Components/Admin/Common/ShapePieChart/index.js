import React from 'react'
import { PieChart, Pie, Sector, ResponsiveContainer } from 'recharts';
import {ShapePieChartRender} from '../DrawCharts'

const data = [
    { name: 'Group A', value: 900 },
    { name: 'Group B', value: 300 },
    { name: 'Group C', value: 300 },
    { name: 'Group D', value: 200 },
  ];

const ShapePieChart = (props) => {

    const [active, setActive] = React.useState(0)
    
    const onPieEnter = (_, index) => {
       setActive(index)
      };

    return (
        <ResponsiveContainer width="100%" height="100%">
        <PieChart width={400} height={400}>
          <Pie
            activeIndex={active}
            activeShape={ShapePieChartRender}
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
            onMouseEnter={onPieEnter}
          />
        </PieChart>
      </ResponsiveContainer>
    )
}

export default ShapePieChart
