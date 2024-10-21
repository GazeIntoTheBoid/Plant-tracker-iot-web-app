import React from 'react'

export default function ParagraphBox({content,className}) {
  return (
    <div className={`rounded-lg border-4 border-green-800 text-center w-4/6 ${className}`}>
        <p className='p-5'>{content}</p>
    </div>
  )
}
