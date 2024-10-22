'use client'

import React, { useState } from 'react'
import DisplayPic from './DisplayPic.jsx'
import Title from './Title.jsx'
import Link from 'next/link.js'


export default function PlantCardDetails({plant}) {

const [objectIsHovered,setObjectIsHovered] = useState(false)


    return (
    <Link href = {`/plantdash/${plant.plant_id}`}>
    <div className = {` flex flex-row justify-around items-center transition duration-150 ease-in-out hover:scale-105`} onMouseEnter = {() => { setObjectIsHovered(true)}} onMouseLeave = {() => { setObjectIsHovered(false)}} >
        
        <DisplayPic imagePath = {plant.plant_pic_url} className={"m-3"} />
        
                <div className='flex flex-col justify-center items-center m-3'>
                    <Title variant='secondary' content = {plant.plant_name} className={"text-white"}/>
                    <Title variant = "subTitle" content = {plant.plant_breed} className={"text-white"}/>
                </div>
                
                    <div className={`flex flex-col items-center justify-center absolute w-64 h-36 bg-opacity-80 backdrop-blur-sm bg-green-100 mt-2 z-10 rounded-lg transition-opacity duration-200 ${objectIsHovered ? 'opacity-100' : 'opacity-0'}`}>
                        {plant.most_recent_moisture ? <>
                        <Title variant='subTitle' 
                        content={
                        <>
                        Hydration: <span className="font-bold">{plant.most_recent_moisture}%</span>
                        </>}
                        />

                        
                        <Title variant='subTitle' content={`last checked: ${plant.most_recent_time.replace('T', ' ').slice(2, 19)}`}/></> 
                        :
                        <><Title variant='subTitle' content={`Hydration: -- `}/>
                        <Title variant='subTitle' content={`last checked: NO DATA`}/></>
                         }
                    </div>
                
        
    </div>
    </Link>
  )
}
