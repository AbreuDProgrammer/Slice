const express = require('express');
const app = express();
const port = 2412;

app.post('/sendMessage', (req, res) => {
    console.log(request.body);
});

app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});
