const express = require('express');
const cors = require('cors');
const projectRouter = require('../js/routes/project');


const app = express();
app.use(cors())
app.use(express.json());

app.use("/api/project", projectRouter);

app.get('/', (req, res) => {
    res.send('Api jalannn !!!');
});

app.listen(5000, () => {
    console.log('Server running on port 5000');
})
