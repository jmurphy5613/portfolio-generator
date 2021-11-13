//set up express server
const express = require('express');
const app = express();
const port = process.env.PORT || 3001;
//set up cors
const cors = require('cors');
app.use(cors());


app.listen(port, () => { 
    console.log(`Listening on port ${port}`);
});


