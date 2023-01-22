const express = require('express');

const port = process.env.PORT || 3000; //Para despliegue en la plataforma
const app = express();

app.get("/",(req,res)=>{
    res.send('Hello World');
});

app.listen(port);
console.log(`Server on port ${port}`);