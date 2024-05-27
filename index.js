const express = require('express');
const cors = require('cors')
const app = express();
const connectDB = require('./models/db.js')
app.use(express.json())

const router = require('./routes/route.js')


connectDB()
app.use(cors());
app.use('/api', router)



app.use('/public', express.static(`${process.cwd()}/public`));

app.get('/', function(req, res) {
  res.sendFile(process.cwd() + '/views/index.html');
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
