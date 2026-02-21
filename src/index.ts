import express, {Request, Response} from "express";

const app = express();

app.get("/",(req: Request,res:Response)=>{
    res.send(`Bem vindo tsc-watch`);
});

app.get("/users", (req:Request,res: Response)=>{
    let usuarios =[{
        nome: "vagner",
        idade:33,
    },
    
    {
        nome: "vanessa",
        idade:39,
    }]
    
    res.send(usuarios)
})

app.listen(3000, ()=>{
    console.log(`sevidor ativo na porta 3000`);
});

