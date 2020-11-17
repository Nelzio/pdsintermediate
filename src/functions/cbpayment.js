const client = require('../config').client

function transactionReference(length) {
    var result = ""
    var characters =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
    var charactersLength = characters.length
    for (var i = 0; i < length; i++) {
        result += characters.charAt(
            Math.floor(Math.random() * charactersLength)
        )
    }
    return result
}

function payment(req, res){
  const paymentData = {
      from: req.body.telephone, // input_CustomerMSISDN
      reference: transactionReference(8), // input_ThirdPartyReference
      transaction: "T12344C", // input_TransactionReference
      amount: req.body.amount, // input_Amount
  }

  client
      .receive(paymentData)
      .then((r) => {
          res.json(r.data)
      })
      .catch((e) => {
          res.json(e)
      })
}

module.exports = {
  payment
}
