import { Router } from "express"
import productsRouter from "./products/routes.js"

const route = Router()
route.use("/products", productsRouter)
route.use("/reviews", reviewsRouter)

export default route
