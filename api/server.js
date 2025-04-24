/* const jsonServer = require('json-server');
const cors = require('cors');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
//const middlewares = jsonServer.defaults();

// Set up CORS for cross-origin requests
server.use(cors({
  origin: 'https://fitness-tracker-y8ecs1gde-esther-sonias-projects.vercel.app/', 
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
}));

//server.use(middlewares);
server.use(router);

module.exports = server; */

const jsonServer = require('json-server');
const cors = require('cors');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

// Set up CORS for cross-origin requests
server.use(cors({
  origin: 'https://fitness-tracker-y8ecs1gde-esther-sonias-projects.vercel.app', // Removed trailing slash
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'] // Added allowedHeaders
}));
// Use JSON Server default middlewares (logger, static, cors)
server.use(middlewares);

// Add custom middleware for debugging
server.use((req, res, next) => {
  console.log(`${req.method} ${req.path} - Origin: ${req.headers.origin}`);
  next();
});

// Add a health check endpoint
server.get('/healthcheck', (req, res) => {
  res.json({ status: 'ok', message: 'API is running' });
});

// Use the router
server.use(router);

module.exports = server;