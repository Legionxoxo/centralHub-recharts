"use client"

import Image from 'next/image'
import React from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Jan',
    Estimated: 4000,
    Actual: 2400,
    
  },
  {
    name: 'Feb',
    Estimated: 3000,
    Actual: 1398,
    
  },
  {
    name: 'Mar',
    Estimated: 2000,
    Actual: 9800,
    
  },
  {
    name: 'April',
    Estimated: 2780,
    Actual: 3908,
    
  },
  {
    name: 'May',
    Estimated: 1890,
    Actual: 4800,
    
  },
  {
    name: 'June',
    Estimated: 2390,
    Actual: 3800,
   
  },
  {
    name: 'July',
    Estimated: 3490,
    Actual: 4300,
  
  },
  {
    name: 'Aug',
    Estimated: 3490,
    Actual: 4300,
  
  },
  {
    name: 'Sep',
    Estimated: 3490,
    Actual: 4300,
   
  },
  {
    name: 'Oct',
    Estimated: 3490,
    Actual: 4300,
   
  },
  {
    name: 'Nov',
    Estimated: 3490,
    Actual: 4300,
    
  },
  {
    name: 'Dec',
    Estimated: 3490,
    Actual: 4300,
    
  },
];

const FinanceChart = () => {
  return (
        <div className='bg-white rounded-xl w-full h-full p-4'>
        {/* Title */}
        <div className='flex justify-between items-center'>
            <h1 className='text-lg font-semibold'>Finance</h1>
            <Image src="/moreDark.png" alt='show more' width={20} height={20} />
        </div>

        {/* Chart */}
        <ResponsiveContainer width="100%" height="90%">
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke='#ddd' />
          <XAxis dataKey="name" axisLine={false}tick={{fill:"#d1d5db"}} tickLine={false} tickMargin={10}/>
          <YAxis axisLine={false}tick={{fill:"#d1d5db"}} tickLine={false} tickMargin={20} />
          <Tooltip />
          <Legend align='center' verticalAlign='top' wrapperStyle={{paddingTop:"10px",paddingBottom:"30px"}} />
          <Line type="monotone" dataKey="Actual" stroke="#7C93C3" strokeWidth={5} />
          <Line type="monotone" dataKey="Estimated" stroke="#E1D7B7" strokeWidth={5} />
        </LineChart>
      </ResponsiveContainer >
    </div>
  )
}

export default FinanceChart