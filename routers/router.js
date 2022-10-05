import Router from "express";
import ratesController from "../controllers/ratesController.js";
const router = new Router()

router.get('/rates', ratesController.getRates);

export default router;