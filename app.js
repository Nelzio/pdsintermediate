const express = require('express')
var bodyParser = require('body-parser')
var cors = require('cors')
const app = express()
const port = 3000

const payment = require('./src/functions/cbpayment')

console.log(payment)

app.use(cors())

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.get('/', (req, res) => {
  res.send('PaymentsDS with Express')
})

app.route('/cb').post(payment.payment)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
