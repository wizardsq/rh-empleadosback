const  Router = require("express");
const { Login, CreateUserFile } = require('../controllers/auth.controller')
const {ObtenerAllEmp, CrearEmp, UpdateEmp, DeleteEmp, DatosEmp} = require('../controllers/emp.controller')
const multer = require('multer');
const storage = multer.memoryStorage();
const upload = multer({ storage });

const router = Router();

router.use((req, res, next) => {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });
  
  //* Rutas Post
  router.post("/login", Login);
  router.post("/createusf", upload.single('file'), CreateUserFile)
  router.post("/createmp", CrearEmp)

  //* Rutas Get
  router.get("/empleados", ObtenerAllEmp)
  router.get('/datos', DatosEmp)

  //* Rutas put
  router.put('/updateEmp/:id', UpdateEmp)
  router.put('/deleteEmp/:id', DeleteEmp)
  module.exports = router