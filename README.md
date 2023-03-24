# medical-injector-app

## Summary

* Injector: Sends data about injections (medication, dosage, and timestamp) to the backend via Bluetooth.
* Backend: Receives the data from the injector hardware device and processes it, storing the information in the database.The backend also exposes APIs for the frontend to interact with the data.
* API: RESTful
* Frontend: Communicates with the backend using APIs to fetch, add, update, or delete injection data. The frontend then displays this information to the user in a user-friendly manner.

## Data Flow

* The injector hardware device sends data to the backend via Bluetooth.
* The backend processes the data and stores it in the database.
* The frontend sends API requests to the backend to fetch, update, or delete data.
* The backend communicates with the database to perform the requested actions and returns the results to the frontend.
* The frontend updates the displayed information based on the responses received from the backend.

## Some Future Enhancement...

* Device Management: Allow users to pair, manage, and unpair Bluetooth devices (battery status display and connection status)
* Data Analysis: Provide users with visual representations of their injection data, such as graphs or charts, to help them understand trends, or patterns in their injection history
* Notifications and Reminders: Remind users about upcoming injections or to notify them of missed injections
* Doctor Collaboration: Enable users to share their injection data with their docters directly from the app
* .....

## Demo

<img src="https://github.com/RicardoChaseCo/med-injector/blob/main/Screenshot%202023-03-07%20at%2011.32.41.png" alt="Image text" width="800">

