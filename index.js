console.log(`Hello, ${process.env.USER_NAME || 'User'}!`);
console.log(`The secret key is: ${process.env.SECRET_KEY || 'Not set'}`);

const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello from Daytona!');
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
