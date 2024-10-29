import Card from "@/components/Card"
import CardContainer from "@/components/CardContainer"
import ParagraphBox from "@/components/ParagraphBox"

import PlantCardDetails from "@/components/PlantCardDetails"
import Title from "@/components/Title"

export default async function Page() {
  let fetchError = null
  let plantdata = null
  try{
    let data = await fetch(process.env.PLANT_DATA_API_URL,{ next: { revalidate: 3600 } }) // caching behaviour is default so requries revalidation
   //nextjs.org/docs/app/building-your-application/caching

    if (data.status == 200){
      plantdata = await data.json()}
    else {fetchError = `Server error: ${data.status }` }
    
    }catch(error){
      fetchError = `No response from server - ${error}`
    }

    return (
        <>
          <Title variant = "secondary" className = " text-green-800 p-2" content= { "Browse Your Plant Profiles"} />
          <ParagraphBox>Mouse over a profile to see the latest soil data. Click a plant for more details</ParagraphBox>
          {!fetchError?  <CardContainer>
            {plantdata.map( (plant) =>
              {
                return(
                  <Card key = {plant.plant_id}  >
                    <PlantCardDetails plant = {plant}/>
                  </Card>
                )
              }
            )}
          </CardContainer> : <div className="m-auto text-center">ERROR: {fetchError}</div>}
          </>
      )}