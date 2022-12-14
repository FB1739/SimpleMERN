const express = require("express")

const api = express.Router()

api.post('/products', (req, res) => req.status(201).send({success: true}))

module.exports = api