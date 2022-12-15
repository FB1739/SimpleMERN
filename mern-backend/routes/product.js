const express = require("express")

const { addProduct } = require("../controllers/productsController")

const api = express.Router()


api.post('/products', addProduct)

module.exports = api