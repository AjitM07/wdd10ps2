const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send("Application Deployed Successfully");
})

app.get('/status', (req, res) => {
    res.json({
        status: "running",
        environment: process.env.NODE_ENV || "development"
    });
});


app.get('/info', (req, res) => {
    res.json({
        name: "Ajit's Deployment App",
        version: "1.0.0",
        author: "Ajit Mangsulikar"
    });
});


app.use((req, res) => {
    res.status(404).json({
        error: "Route not found"
    });
});


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});



