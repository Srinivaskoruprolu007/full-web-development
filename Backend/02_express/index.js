import express from "express";

const app = express();
const port = 3000;

app.use(express.json());

let teaData = [];
let nextId = 1;

// add a new Tea
app.post("/teas", (req, res) => {
  const { name, price } = req.body;
  const newTea = { id: nextId++, name, price };
  teaData.push(newTea);
  res.status(201).send(newTea);
});

// get all Teas
app.get("/teas", (req, res) => {
  res.status(200).send(teaData);
});

// get a specific Tea
app.get("/teas/:id", (req, res) => {
  const id = req.params.id;
  const tea = teaData.find((tea) => tea.id === parseInt(id));
  if (!tea) {
    res.status(404).send("Tea not found");
  }
  res.status(200).send(tea);
});

// update a specific Tea
app.put("/teas/:id", (req, res) => {
  const id = req.params.id;
  const { name, price } = req.body;
  const tea = teaData.find((tea) => tea.id === parseInt(id));
  if (!tea) {
    res.status(404).send("Tea not found");
  }
  tea.name = name;
  tea.price = price;
  res.status(200).send(tea);
});

// delete a specific Tea
app.delete("/teas/:id", (req, res) => {
  const id = req.params.id;
  const tea = teaData.finc((tea) => tea.id === parseInt(id));
  if (!tea) {
    res.status(404).send("Tea not found");
  }
  teaData = teaData.filter((tea) => tea.id !== parseInt(id));
  res.status(200).send("Tea deleted");
});
// app.get("/", (req, res) => {
//   res.send("It's my index page");
// });

// app.get("/about", (req, res) => {
//   res.send("It's my about page");
// });

// app.get("/contact", (req, res) => {
//   res.send("It's my LinkedIn page");
// });

app.listen(port, () => {
  console.log(`Server running on port ${port}...`);
});
