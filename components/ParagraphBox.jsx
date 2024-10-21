import React from 'react'

export default function ParagraphBox({className,children}) {
  return (
    <div className={`rounded-lg border-4 border-green-800 text-center w-4/6 ${className}`}>
        <div className='p-5'>{children}</div>
    </div>
  )
}
