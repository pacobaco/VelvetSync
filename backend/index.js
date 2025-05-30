const fs = require('fs');
const https = require('https');
const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.json());

const secureControl = require('./secure-control');
const consentRoute = require('./consent');

app.use('/api', secureControl);
app.use('/api', consentRoute);

const options = {
  key: fs.readFileSync('./backend/server.key'),
  cert: fs.readFileSync('./backend/server.cert'),
};

https.createServer(options, app).listen(443, () => {
  console.log('✅ HTTPS server running on port 443');
});