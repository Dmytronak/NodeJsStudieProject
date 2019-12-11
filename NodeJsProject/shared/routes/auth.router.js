//#region Properties
const express = require('express');
const authRouter = express.Router();

//#endregion Properties

//#region Controllers
const authController = require('../controllers/auth.controller')
//#endregion Controllers

authRouter.post('/register',authController.register);
authRouter.post('/login',authController.login);

authRouter.get('/getById/:id',authController.getById);
authRouter.get('/getAll',authController.getAllUsers);
authRouter.get('/register',authController.getRegister);
authRouter.get('/login',authController.getLogin);
authRouter.get('/',authController.getLogin);

module.exports = authRouter;