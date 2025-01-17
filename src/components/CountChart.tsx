"use client"

import Image from 'next/image';
import React from 'react'
import { RadialBarChart, RadialBar, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Total',
    count: 1666,
    fill: 'white',
  },
  {
    name: 'Female',
    count: 432,
    fill: '#E8C872',
  },
  {
    name: 'Male',
    count: 1234,
    fill: '#1E2A5E',
  },
];


const CountChart = () => {
  return (
    <div className='bg-white rounded-xl w-full h-full p-4'>
        {/* Title */}
        <div className='flex justify-between items-center'>
            <h1 className='text-lg font-semibold'>Salesman</h1>
            <Image src="/moreDark.png" alt='show more' width={20} height={20} />
        </div>

        {/* Chart Container */}
        <div className='relative w-full h-[75%]'>
        <ResponsiveContainer>
        <RadialBarChart cx="50%" cy="50%" innerRadius="40%" outerRadius="100%" barSize={32} data={data}>
          <RadialBar
            background
            dataKey="count"
          /> 
        </RadialBarChart>
      </ResponsiveContainer>
      <Image src="/maleFemale.png" alt='legend' width={50} height={50} className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'/>
        </div>

        {/* Legend to read chart */}
        <div className='flex justify-center gap-16'>
            <div className='flex flex-col gap-1'>
                <div className='w-5 h-5 bg-bright rounded-full'/>
                <h1 className='font-bold'>1,234</h1>
                <h2 className='text-xs text-zinc-500'>Male (65%)</h2>
            </div>
            <div className='flex flex-col gap-1'>
                <div className='w-5 h-5 bg-chartSecondary rounded-full'/>
                <h1 className='font-bold'>432</h1>
                <h2 className='text-xs text-zinc-500'>Female (35%)</h2>
            </div>
        </div>

    </div>
  )
}

export default CountChart