const express = require("express");
const path = require("path")
const PORT = process.env.PORT || 5000;

var app = express();

app.use(express.static(path.join(__dirname, "public")));
app.get("/", inicio);


function inicio(request, response) {
  response.sendFile(path.join(__dirname,"public/calculadora_hiperfocal.html"));
}

app.listen(PORT, mensajeServidorIniciado);

function mensajeServidorIniciado() {
  console.log("Servidor iniciado en el puerto: " + PORT);
}
