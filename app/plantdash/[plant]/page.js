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
   plantdata.forEach(moisturesample => {

    moisturevalues.push(moisturesample.moisture)
    let sampletimeformated = moisturesample.sample_time
    sampletimeformated = sampletimeformated.replace('T', ' ').slice(2, 19)
    sampletimes.push(sampletimeformated)
    
   })



    return (
        <>
        <Title className = " text-green-800 p-2"content= { `Collected soil moisture readings`} />
        <ParagraphBox content = {`The most recent data for ${plantName}`}/>
        

        <Graph  y_axis = {moisturevalues} x_axis = {sampletimes} x_labels={sampletimes} />


        
        </>

    )

}