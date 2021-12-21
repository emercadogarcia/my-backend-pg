const jwt = require('jsonwebtoken');
const { config } = require('./config/config');

const secret = config.claveK;
const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsInJvbGUiOiJjdXN0b21lciIsImlhdCI6MTY0MDA0MTkwNH0.00CAJsbOj9NxGe1lz5HPHIBV8qdIoLru8nSUDY549KE';

function verifyToken(token, secret) {
  return jwt.verify(token, secret);
}

const payload = verifyToken(token, secret);
console.log(payload);
