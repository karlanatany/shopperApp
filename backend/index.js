import express from "express";
import { createOrder } from "./src/services/createOrder.js";
import { getAllProducts } from "./src/services/getAllProducts.js";
import cors from "cors";

const app = express()
 app.use(cors())
app.use(express.json())

app
  .get('/products', getAllProducts)
  .post('/orders', createOrder)
  .listen(3030, () => {
    console.log('Starting server');
  })