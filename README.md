# PLAPP - PLant tracking APP

This project is a full stack single page web application connected to an IoT device that logs soil moisture readings. It is intended to improve the condition and quality of plants connected to the app by making it easy for the end user to check their soil condition at a glance. The application also provides a localised precipitation forecast to inform future watering needs.
<div align = "center">
<img src="https://github.com/user-attachments/assets/48494767-d7dd-4009-953f-59c4373cbcca2"/>
</div>




## The Web app frontend
The frontend of the app is built and rendered server side using next.js. Styling is done inline with tailwind CSS.

<img src="https://github.com/user-attachments/assets/88b20465-8d90-4ddc-b6a9-cf23ed0f1b57" />

This application is made of three primary pages:

### The plant catalogue:
populated with plant profiles from the data base. Basic plant state information is provided on mouse over and clicking a plant routes you to its details page.
<div align="center">
<img src="https://github.com/user-attachments/assets/c678f81a-b8cf-496b-9fd0-0a02d6cd5909" />
</div>
### The weather forecast:
Based on data fetched from open-meteo.com, a 7 day precipitation forecast is presented graphically.

### Plant details: (dynamic route)
Each plant can be selected to see it's data history and profile information in detail.
this is presented as statistics and the most recent moisture sample data is presented as a graph.


## App Backend

The backend of the website is split between Next.js and node-red. The node-red server provides API end points for the app to retrieve data from the database.
<div align="center">
<img align = "center" src="https://github.com/user-attachments/assets/664dbfde-d615-473b-a08f-a4570e709188" />
</div>
The Node-red server also handles messages received from The Things network MQTT broker. It parses these messages and inserts the received data as new entries into an external database.
<div align="center">
<img src="https://github.com/user-attachments/assets/f95d0d77-35d4-4965-95fe-d8034d29054b" />
</div>


## Future work
<ul>
  <li>The app currently only supports my own plants, implementing a user registration / login would be the first step to supporting user accounts tracking their own plant catalogues</li>
  <li>Email alert notifications based on plant dryness and the future forecast</li>
  <li>incremental SSR implementation - currently nothing is cached.</li>
  <li>Better data visualisation - the current implementation is very limited. Using a graphing library would allow the user to explore historical data.</li>
</ul>

