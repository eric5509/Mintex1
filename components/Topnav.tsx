import React from 'react'
import TopnavLeft from './TopnavLeft'
import TopnavRight from './TopnavRight'

export default function Topnav() {
  return (
    <div className='flex justify-between items-center'>
        <TopnavLeft />
        <TopnavRight />
    </div>
  )
}
