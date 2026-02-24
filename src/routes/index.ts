import  Express  from "express";
import { userRoutes } from "./users.route";

export const routes = (app: Express.Express) =>{
    app.use(Express.json())
    app.use(userRoutes);
}