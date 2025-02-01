const Jsonserver = requere("json-server");
const server = Jsonserver.create();
const router = Jsonserver.router("data.json");
const middlewares = Jsonserver.defaults();
const port = 4000;

server.use(middlewares);
server.use(router);
server.listen(port);