const exppress = require('express');
const config = require('./config')
const packageJson = require('../package')

const app = exppress();

app.get('/', (req, res) => {
  res.send('olena-heroku-app1 is running...'); 
})
app.get('/status', (req, res) => {
  res.send(JSON.stringify({version: packageJson.version, status: 'OK'}));
})

app.listen(config.port, () => {
  console.log(`Listening on port ${config.port}`);
});