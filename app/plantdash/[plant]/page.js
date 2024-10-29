import Graph from "@/components/Graph"
import ParagraphBox from "@/components/ParagraphBox"
import Title from "@/components/Title"


export default async function Page({params}) {
    let plantdata = null
    let fetchError = null
    let moisturevalues = []
    let sampletimes = []
    let plantName = null
    let firstMonitored  = null
    let averageMoisture = 0
    let sampletimeformated 
    try{
    let data = await fetch(`${process.env.PLANT_DETAILS_API_URL}?plant_id=${params.plant}`, { cache: 'no-store' } )
    let temp = await data.json()
     console.log("status code = ", data.status)
     //data.headers.forEach((value, key) => {
     //   console.log(`${key}: ${value}`);})
        console.log(temp , " = plant data")
    if (temp) {plantdata = temp}else{
        console.log("status code error thrown")
        throw new Error(`Response status: ${data.status}`)
    
    }


    }catch(error){
        console.log("error caught")

        fetchError = ` Error when attempting to request moisture data, ${error}`

    }
    if (!fetchError){
        //console.log(fetchError)1
    plantName = plantdata[0]?.plant_name || "Unknown plant"
    plantName =plantName.charAt(0).toUpperCase() + plantName.slice(1)
    firstMonitored = plantdata[0]?.sample_time || "--"

    firstMonitored = firstMonitored.replace('T', ' ').slice(2, 19)
    plantdata.forEach(moisturesample => {

    moisturevalues.push(moisturesample.moisture)
    sampletimeformated = moisturesample.sample_time

    sampletimeformated = sampletimeformated.replace('T', ' ').slice(2, 19)
    sampletimes.push(sampletimeformated)
    averageMoisture = averageMoisture + moisturesample.moisture
    
   })
   averageMoisture = averageMoisture / plantdata.length
    }
    return (
        <>
        
        <Title className = " text-green-800 p-2"content= { `Collected soil moisture readings`} />
        {(fetchError == null)?
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

        : <div className="m-auto text-center">{fetchError}</div> }
        
        </>

    )

}