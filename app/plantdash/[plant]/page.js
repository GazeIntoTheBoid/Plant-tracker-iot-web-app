import Graph from "@/components/Graph"
import ParagraphBox from "@/components/ParagraphBox"
import Title from "@/components/Title"


export default async function Page({params}) {
   
    let data = await fetch(`${process.env.PLANT_DETAILS_API_URL}?plant_id=${params.plant}`, { cache: 'no-store' }) // means that this actually makes the call.
    let plantdata = await data.json() // revalidate function look into. 
   // console.log(plantdata)
   let moisturevalues = []
   let sampletimes = []
   let plantName = plantdata[0].plant_name

   plantName =plantName.charAt(0).toUpperCase() + plantName.slice(1)
   let firstMonitored = plantdata[0].sample_time
   let averageMoisture = 0
   firstMonitored = firstMonitored.replace('T', ' ').slice(2, 19)
   plantdata.forEach(moisturesample => {

    moisturevalues.push(moisturesample.moisture)
    let sampletimeformated = moisturesample.sample_time

    sampletimeformated = sampletimeformated.replace('T', ' ').slice(2, 19)
    sampletimes.push(sampletimeformated)
    averageMoisture = averageMoisture + moisturesample.moisture
    
   })
   averageMoisture = averageMoisture / plantdata.length



    return (
        <>
        <Title className = " text-green-800 p-2"content= { `Collected soil moisture readings`} />
        <div className="flex flex-row gap-2 flex-wrap items-center align-middle">
        <ParagraphBox className={"m-auto"}>
        <Title content={plantName}/>
        {plantName} has been monitored since: {firstMonitored}.<br/>
        The average moisture content of their soil since then is: {averageMoisture.toFixed(0)}%<br/>
        <br/>
        The 7 most recent data points taken for {plantName} are displayed on the accompanying graph.

        <br/>

        {averageMoisture > moisturevalues[moisturevalues.length-1] ? `${plantName} is drier than they have been on average, you should probably water them.` : `${plantName} has above average moisture content in their soil.`}
        <br/>

         

        </ParagraphBox>

        <Graph  y_axis = {moisturevalues} x_axis = {sampletimes} x_labels={sampletimes} />

        </div>
        
        </>

    )

}