import React from 'react'

export default function Graph({x_axis,y_axis, x_labels, y_labels}) {
  return (
    <div className=" flex w-4/6 flex-nowrap flex-row py-10 m-auto">
        <div className=" flex w-12 flex-nowrap flex-col justify-between items-end pr-2">
            <div>100%</div>
            <div className='pb-10'>0%</div>
        </div>
        <div className='flex flex-col flex-nowrap h-auto w-full gap-2 '> {/** contains the bar container and the label container */}
            <div className="flex flex-row w-full h-72 gap-2 items-end border-l-2 border-black border-b-2 p-1" > {/** the bar container  */}
                {y_axis.map((y_value,index) => (<div className="bg-blue-800" key = {index} style = {{height: `${y_value}%`, width : `calc(100% / ${y_axis.length})`}}>  </div>))}
            </div>
            {x_labels.length>=2 ? (   
                <>
            <div className='  justify-between flex-row w-full h-10 gap-2 hidden lg:flex'>{/* thellabel container  */}
                {x_labels.map((label, index) => (<p className='align-middle text-center w-full' key = {index} >{label}</p>))}
            
            </div>
            <div className='  justify-between flex-row w-full h-10 gap-2 flex lg:hidden'>{/* thellabel container  */}
            <p className='align-middle text-left w-full' key = {0} >{x_labels[0]}</p>
            <p className='align-middle text-right w-full' key = {0} >{x_labels[x_labels.length-1]}</p>
            
            </div>
            </>
        
            ): <></>}

        </div>
    </div>
  )

}
