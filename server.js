// server.js
const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()


server.use(middlewares);
server.get('/api/v1/getAdminID/:id', (req, res) => {
  const { id } = req.params;
  const db = router.db;
  const admin = db.get('getAdminID').find({ admin_id: id }).value();
  if (admin) {
    res.json(admin);
  } else {
    res.status(404).json({ message: 'Data not found' });
  }
});

// server.use(middlewares)
server.use(router)
server.listen(8081, () => {
  console.log('JSON Server is running')
})