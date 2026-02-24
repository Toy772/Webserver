import Express from "express";
import { UsersController } from "../controllers/users.controller";

export const userRoutes = Express.Router();


userRoutes.get("/users", UsersController.getAll);
userRoutes.get("/users/:id", UsersController.getById);
userRoutes.post("/users", UsersController.save);
userRoutes.put("/users/:id",UsersController.update);
userRoutes.delete("/users/:id",UsersController.delete);

//put - atualiza o objeto inteiro `patch` atualiza somente 1 ou + propriedades do objeto
//delete -  deleta dados ou objetos - ex remove os usuarios
//post adiciona um novo objeto - ex add usuarios
//get - faz uma requisição pro servidor ex: mostrar lista de usuarios 