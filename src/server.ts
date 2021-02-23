import Express, { request, response } from 'express';

const app = Express();

app.get("/",(request , response) =>{
    return response.send("Bem bolado !!!")
});

app.post("/", (request, response) => {
    return response.json({mensage : "Bem Bolado!!!"})
})

app.listen(3333, ()=>console.log("Server iniciado com sucesso !!"));