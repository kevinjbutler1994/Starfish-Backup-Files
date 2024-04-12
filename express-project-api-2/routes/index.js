import { Router } from "express";
import countriesRoutes from "./countries.js"


const router = Router ()

router.get("/", (rec, res) => res.send ('This is the countries api root!'));

router.use("/countries", countriesRoutes)


export default router; 


