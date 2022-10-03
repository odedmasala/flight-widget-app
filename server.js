const PORT = 8000
const axios = require('axios')
const express = require('express')
const cors = require('cors')
require('dotenv').config()

const app = express()
app.use(cors())

app.get('/flights', (req, res) => {
    const options = {
        method: 'GET',
        url: `${process.env.URL}?page-size=6`,
        headers: {
          accept: 'application/json',
          'X-Cassandra-Token':process.env.TOKEN
        }
      };
      
      axios.request(options).then(function (response) {
        console.log(response.data);
        res.json(response.data)
      }).catch(function (error) {
        console.error(error);
      });
})

app.listen(PORT, () => console.log(`running on port localhost:${PORT}/flights`))