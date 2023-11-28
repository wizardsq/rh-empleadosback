const  Router = require("express");
const { Login, CreateUserFile, CreateUser } = require('../controllers/auth.controller')
const {ObtenerAllEmp, ObtenerAllEmpAct, CrearEmp, UpdateEmp, DeleteEmp, DatosEmp, ActiveEmp, InfoEmp, ObtenerAllEmpInac} = require('../controllers/emp.controller')
const { ObtenerAllDoc, UpdateDoc, CreateDoc } = require('../controllers/doc.controller')
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
  router.post('/login', Login);
  router.post('/crearuser', CreateUser)
  router.post('/createusf', upload.single('file'), CreateUserFile)
  router.post('/createmp', CrearEmp)
  router.post('/creatdoc', CreateDoc)

  //* Rutas Get
  router.get('/Allempleados', ObtenerAllEmp)
  router.get('/empleados', ObtenerAllEmpAct)
  router.get('/empleadosin', ObtenerAllEmpInac)
  router.get('/info', InfoEmp)
  router.get('/datos', DatosEmp)
  router.get('/documentos/:id', ObtenerAllDoc)


  //* Rutas put
  router.put('/updateDoc/:id', UpdateDoc)
  router.put('/updateEmp/:id', UpdateEmp)
  router.put('/deleteEmp/:id', DeleteEmp)
  router.put('/activEmp/:id', ActiveEmp)
  module.exports = router
