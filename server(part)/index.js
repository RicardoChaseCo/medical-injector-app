const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Medical Injector Backend");
});

const injectionsData = [
    { id: 1, user: "Xingnan", medication: "Med1", dosage: 10, timestamp: "2023-03-23T10:30:00Z" },
    { id: 2, user: "Xingnan", medication: "Med2", dosage: 20, timestamp: "2023-03-23T12:15:00Z" },
    { id: 3, user: "Xingnan", medication: "Med1", dosage: 30, timestamp: "2023-03-23T17:30:00Z" },
    { id: 4, user: "Xingnan", medication: "Med2", dosage: 15, timestamp: "2023-03-23T22:15:00Z" },
    // ...
  ];
  

  app.post("/api/injections", (req, res) => {
    const { user, medication, dosage } = req.body;
    const newId = Math.max(...injectionsData.map((i) => i.id)) + 1;
    const timestamp = new Date().toISOString();
  
    const newInjection = { id: newId, user, medication, dosage, timestamp };
    injectionsData.push(newInjection);
    res.status(201).json(newInjection);
  });
  


app.get("/api/injections", (req, res) => {
    res.json(injectionsData);
  });
  
  

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
