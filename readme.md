--- comandos "nodejs" ---

npm init -y ------------------------ cria a configuracao geral do projeto em detalhes
npm install express ---------------- instal o express
node index.js ---------------------- execulta o sevidor
npm i typescript -D ---------------- instala o typescript no modo dev
npm i @types/node @types/express --- intala outras dependencia do typescript
npx tsc --init ----------------------execulta o typescript

--- comandos "Vscode" ---

crlt + L ----------------------------- Limpa terminal 
crlt + D ----------------------------- seleciona toda as varivais com msm nome

--- comandos git ---

git init ------------------------------------------ inicializa um repositorio vazio
git add ou <.> para todos ------------------------- adiciona arquivo ao git
git status ---------------------------------------- visualiza o status do git
git commit -m "mensagem commit" ------------------- commita
git branch -M "nome" ------------------------------ renomeia um branch
git remote add origin <(link repositorio)> -------- set origem do git
git push -u origin -------------------------------- empurra os arquivos para o git
git checkout -b "nome branch" --------------------- cria novo brench ou troca de brench
git merge ----------------------------------------- junta um brench com atual logada
git clone ----------------------------------------- copia todos os arquivos do repositorio github para maquina
git pull ------------------------------------------ atualiza os arquivos da maquina com o do repositorio baixa os arquivos do repositorio pendentes
git log --oneline --------------------------------- visualiza commits hashs (codigo do commit e descricao)
git push origin +^: ------------------------------- deleta commits no repositorio
git reset HEAD~ ----------------------------------- reseta para o ultimo commit ou desejado