import express from "express";
import { routes } from "./routes/index";
import { initializeApp } from 'firebase-admin/app';

initializeApp();
const app = express();

//--------------------------

routes(app);

app.listen(3000, ()=>{
    console.log(`sevidor ativo na porta 3000`);
});

