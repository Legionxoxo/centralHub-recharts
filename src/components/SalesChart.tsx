"use client"

import Image from 'next/image';
import React from 'react'
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Mon',
    Target: 4000,
    Sold: 2400,
    
  },
  {
    name: 'Tue',
    Target: 3000,
    Sold: 1398,
  
  },
  {
    name: 'Wed',
    Target: 2000,
    Sold: 3800,
    
  },
  {
    name: 'Thu',
    Target: 2780,
    Sold: 3908,
    
  },
  {
    name: 'Fri',
    Target: 1890,
    Sold: 4800,
    
  },
];

const SalesChart = () => {
  return (
    <div className='bg-white rounded-lg p-4 h-full'>

        {/* Title */}
        <div className='flex justify-between items-center'>
            <h1 className='text-lg font-semibold'>Sales Target</h1>
            <Image src="/moreDark.png" alt='more' width={20} height={20}/>
        </div>

        {/* Chart */}
        
        <ResponsiveContainer width="100%" height="90%">
        <BarChart
          width={500}
          height={300}
          data={data}
         barSize={20}
        >
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke='#ddd'/>
          <XAxis dataKey="name" axisLine={false}tick={{fill:"#d1d5db"}} tickLine={false} />
          <YAxis axisLine={false} tick={{fill:"#d1d5db"}} tickLine={false}/>
          <Tooltip contentStyle={{borderRadius:"10px", borderColor:"lightgray"}} />
          <Legend align='left' verticalAlign='top' wrapperStyle={{paddingTop:"20px",paddingBottom:"40px"}} />
          <Bar dataKey="Target" fill="#1E2A5E"  legendType="circle" />
          <Bar dataKey="Sold" fill="#E8C872"  legendType="circle" />
        </BarChart>
      </ResponsiveContainer>
        

        {/* Legend */}
        <div className=''></div>
    </div>
  )
}

export default SalesChart