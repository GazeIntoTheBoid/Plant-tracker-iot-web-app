import dynamic from 'next/dynamic'
import React from 'react'

// Dynamically import Plotly without SSR
const Plot = dynamic(() => import('react-plotly.js'), { ssr: false });



export default function Moistureplot({x,y}) {
  return (
    
    <div>

    <Plot className = "border-green-800 border-4"data = {[
    {
        x: x,
        y: y,
        type: `bar`
  
    }

    ]}
    layout={ {
       width: 360, 
        height: 240,
        margin:{
            l:50,
            r:25,
            t:25,
            b:50,
            },
        xaxis:{
            type: 'category',
            showgrid: false,
            title: "",
            zeroline: false
            },
        yaxis:{
            showgrid: false,
            range:[0,100],
            zeroline: false,
            title:{ 
                text:"Chance of rain (%)",
  
                }
            }
            

            }
    } 
    config={{   displayModeBar: false,
                staticPlot: true
                 }}

    />
    </div>
  )
}
