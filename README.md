# PLAPP - PLant tracking APP

This project is a full stack single page web app connected to an IoT device that logs soil moisture readings. It is intended to improve the condition and quality of plants connected to the app and make it easy for the end user to check their soil condition at a glance. The application also provides a localised precipitation forecast to inform future watering needs.
<img src="https://github.com/user-attachments/assets/88b20465-8d90-4ddc-b6a9-cf23ed0f1b57" />
## The Web app frontend
The frontend of the app is built and rendered server side using next.js. Styling is done inline with tailwind CSS.

This application is made of three primary pages:

### The plant catalogue:
populated with plant profiles from the data base. Basic plant state information is provided on mouse over and clicking a plant routes you to its details page.
<div align="center">
<img src="https://github.com/user-attachments/assets/c678f81a-b8cf-496b-9fd0-0a02d6cd5909" />
</div>
### The weather forecast:
collected via an API request to ...

### Plant details: (dynamic route)
Each plant can be selected to see it's data history and profile information in detail.
this is presented as statistics and the most recent moisture sample data is presented as a graph.


## App Backend

The backend of the website is split between Next.js and node-red. The node-red server provides API end points for the app to retrieve data from the database.
<img align = "center" src="https://github.com/user-attachments/assets/664dbfde-d615-473b-a08f-a4570e709188" />

![api endpoints]()
The Node-red server also handles messages received from The Things network MQTT broker. It parses these messages and inserts the received data as new entries into an external database. 
<img src="https://github.com/user-attachments/assets/f95d0d77-35d4-4965-95fe-d8034d29054b" />
