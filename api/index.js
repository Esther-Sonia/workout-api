const jsonServer = require('json-server');
const cors = require('cors');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

// Set up CORS for cross-origin requests
server.use(cors({
  origin: 'https://fitness-tracker-y8ecs1gde-esther-sonias-projects.vercel.app/', 
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type']
}));

server.use(middlewares);
server.use(router);

module.exports = server;