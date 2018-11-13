const port = process.env.MATADOR_PORT || 3000;
const backendURL =
  process.env.MATADOR_BACKEND_URL || "http://localhost:" + port;

module.exports = { port, backendURL };
