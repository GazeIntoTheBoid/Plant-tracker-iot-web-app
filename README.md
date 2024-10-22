# PLAPP - PLant tracking APP

This project is a full stack single page web app connected to an IoT device that logs soil moisture readings. It is intended to improve the condition and quality of plants connected to the app and make it easy for the end user to check their soil condition at a glance. The application also provides a localised precipitation forecast to inform future watering needs.
![main page](https://github.com/user-attachments/assets/ab4554e1-8f15-4660-a9bc-866da0a9ca5e)
## The Web app frontend


This application is made of three primary pages

**The plant catalogue:** 
populated with plant profiles from the data base. Basic plant state information is provided on mouse over and clicking a plant routes you to its details page.
![plapp mouse over](https://github.com/user-attachments/assets/f99e12a3-127d-4429-b077-65669a5a2c72)


**The weather forecast:** 
collected via an API request to ...

**Plant details:** (dynamic route)
Each plant can be selected to see it's data history and profile information in detail.
this is presented as statistics and the most recent moisture sample data is presented as a graph.

The frontend of the app is built and rendered server side using next.js. Styling is done inline with tailwind CSS.
The backend of the website is split between Next.js and node-red. Th node-red server provides API end points for the app to retrieve data from the database.
![api endpoints](https://github.com/user-attachments/assets/664dbfde-d615-473b-a08f-a4570e709188)
![MQTT listener](https://github.com/user-attachments/assets/f95d0d77-35d4-4965-95fe-d8034d29054b)
