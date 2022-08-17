const express = require('express');
const calculadora = express();

calculadora.get("./", async(req, res) => {
    res.send("Pagina inicial");
});

calculadora.listen(8080,() =>
{
    console.log("Servidor inciado na porta ")
})

function displaynum(n1){
    Calculator.text1.value = Calculator.text1.value + n1;
}