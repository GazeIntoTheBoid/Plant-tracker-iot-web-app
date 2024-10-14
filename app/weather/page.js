import Graph from '@/components/graph'
import Title from '@/components/Title'
import React from 'react'

export default async function Page() {
    let data = await fetch('https://api.open-meteo.com/v1/forecast?latitude=53.65&longitude=-2.6167&daily=precipitation_probability_max', { cache: 'no-store' }) // means that this actually makes the call.
    let weatherdata = await data.json()
    let x = ["today","+1","+2","+3","+4","+5","+6"]
    let y = weatherdata.daily.precipitation_probability_max




  return (
    <>
    <Title variant='secondary' className={" text-green-800 p-2"} content= { "Probability of rain for the next 7 days"}></Title>

    <Graph  y_axis = {y} x_axis = {x} x_labels={["today","+1","+2","+3","+4","+5","+6"]}/>
    </>
  )
}
