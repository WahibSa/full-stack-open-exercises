const express = require("express");
const morgan = require("morgan")
const cors = require("cors")
const dotenv = require("dotenv")

const app = express();

app.use(express.json());
app.use(cors())


dotenv.config()

const PORT = process.env.PORT || 3000

const person = [
  {
    name: "John",
    phone: "1234567890",
    id: 1,
  },
  {
    name: "Jane",
    phone: "0987654321",
    id: 2,
  },
];

morgan.token('postData', (req) => {
   if (req.method === 'POST') {
     return JSON.stringify(req.body);
   }
   return '';
 });
 
 // Konfigurasi Morgan untuk menggunakan token baru
 app.use(morgan(':method :url :status :res[content-length] - :response-time ms :postData'));

app.get("/api", (req, res) => {
  res.json("Hello world");
});

app.get("/api/person", (req, res) => {
  res.status(200).json(person);
});

app.get("/api/info", (req, res) => {
  res.send(
    "<html><body>Phonebook has info for " +
      person.length +
      " people" +
      "<br/>" +
      Date() +
      "</body></html>"
  );
});

app.get("/api/person/:id", (req, res) => {
  const id = req.params.id;
  const personData = person.find((person) => person.id === parseInt(id));

  if (personData) {
    res.status(200).json(personData);
  } else {
    res.status(404).end();
  }
});

app.post("/api/person", (req, res) => {
  const body = req.body;
  const newPerson = {
    name: body.name,
    phone: body.phone,
    id: person.length + 1,
  };
  const findPhone = person.find((person) => person.phone === body.phone);
  const findName = person.find((person) => person.name === body.name);
  if (findPhone) {
    res.status(500).send({
      error: "phone already exists",
    });
  } else if (findName) {
    res.status(500).send({
      error: "name already exists",
    });
  } else {
    person.push(newPerson);
    res.status(201).json({
      message: "data successfully added",
      data: newPerson,
    });
  }
});

app.delete("/api/person/:id", (req, res) => {
  const id = req.params.id;
  person.filter((person) => person.id !== parseInt(id));

  res.status(204).end();
});

app.listen(PORT, () => {
  console.log("server starting on port 3000");
});
