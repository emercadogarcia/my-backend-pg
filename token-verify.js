const jwt = require('jsonwebtoken');
const { config } = require('./config/config');

const secret = config.claveK;
const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsInJvbGUiOiJjdXN0b21lciIsImlhdCI6MTY0MDI2MDg1Mn0.8MzN3P4GSyY1W0ghhs3X7BlRXOEsRsReW8AEWLFNTuU';

function verifyToken(token, secret) {
  return jwt.verify(token, secret);
}

const payload = verifyToken(token, secret);
console.log(payload);
