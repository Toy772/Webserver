import express, {Request, Response} from "express";

const app = express();

app.use(express.json());

type User =  {
    id:number,
    nome:string,
    email:string
}
let id = 0;
let usuarios: User[] = []


//--
app.get("/",(req: Request,res:Response)=>{
    res.send(`Bem vindo tsc-watch`);
});

//---
//get - faz uma requisição pro servidor ex: mostrar lista de usuarios 

app.get("/users/:id", (req:Request,res: Response)=>{
    let userId =Number(req.params.id);
    let user_aux = usuarios.find(user =>user.id === userId)
    res.send(user_aux)
});

app.get("/users", (req:Request,res: Response)=>{
    
    res.send(usuarios)
});

//-------------------------
//adiciona um novo objeto - ex add usuarios

app.post("/users",(req:Request,res:Response)=>{
    let user = req.body;
    user.id = id++;
    usuarios.push(user);
    res.send({
        message:"usuario criado com sucesso!"
    })
})

//-----------------
//`put` atualiza o objeto inteiro `patch` atualiza somente 1 ou + propriedades do objeto

app.put("/users/:id",(req:Request,res:Response)=>{
    let userId =Number(req.params.id);
    let user = req.body;
    let indexOf = usuarios.findIndex((_user:User) => _user.id === userId);
    usuarios[indexOf].nome = user.nome; 
    usuarios[indexOf].email = user.email; 

    //usuarios.push(user);
    res.send({
        message:"usuario alterado com sucesso!"
    })
})

//-----------------
//delete -  deleta dados ou objetos - ex del ususarios
app.delete("/users/:id",(req:Request,res:Response)=>{
    let userId = Number(req.params.id);
    let indexOf = usuarios.findIndex((user:User)=> userId ===userId);
    usuarios.splice(indexOf,1);
    res.send({
        message:"usuario foi excluido com sucesso!"
    })
})

//--------------------------
app.listen(3000, ()=>{
    console.log(`sevidor ativo na porta 3000`);
});

