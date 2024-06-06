const express = require('express');
const app = express();
const PORT = 4000;
const cors = require('cors');
app.use(cors());
app.use(express.json())

const connectDatabase = require('./controllers/Db');
connectDatabase();


const {loginUser,registerUser, verifyToken} = require("./controllers/UserController")

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.get('/verifyToken', verifyToken);

app.post('/login', loginUser)
app.post('/signup', registerUser)

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
