import express from 'express'
import { Login, Register } from './controllers/auth.controllers.js';
const app = express();
app.use(express.json());

app.post("/", function (req, res) {
  const { name, email, password } = req.body.userData;
  console.log(name, email, password)
  if (name && email && password) {
    res.send("Data recevied.");
  } else {
    res.send("All fields are mandatory.")
  }
});

app.post('/register', Register)
app.post('/login', Login)


app.get("/hello", function (req, res) {
  res.send("Hello.");
});

app.listen(3000);
