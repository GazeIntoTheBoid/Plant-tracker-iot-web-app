import Card from "@/components/Card"
import CardContainer from "@/components/CardContainer"
import ParagraphBox from "@/components/ParagraphBox"

import PlantCardDetails from "@/components/PlantCardDetails"
import Title from "@/components/Title"

export default async function Page() {
    let data = await fetch(process.env.PLANT_DATA_API_URL, { cache: 'no-store' }) // means that this actually makes the call.
    let plantdata = await data.json()
    console.log(plantdata)


    return (
        <>
          <Title variant = "secondary" className = " text-green-800 p-2" content= { "Browse Your Plant Profiles"} />
          <ParagraphBox content={"Mouse over a profile to see the latest soil data. Click a plant for more details."}/>
          <CardContainer>
            {plantdata.map( (plant) =>
              {
                return(
                  <Card key = {plant.plant_id}  >
                    <PlantCardDetails plant = {plant}/>
                  </Card>
                )
              }
            )}
          </CardContainer>
          </>
      )}