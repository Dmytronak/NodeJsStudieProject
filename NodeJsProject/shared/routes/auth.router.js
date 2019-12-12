//#region Properties
const express = require('express');
const authRouter = express.Router();

//#endregion Properties

//#region Controllers
const authController = require('../controllers/auth.controller')
//#endregion Controllers

//#region Routes

//#region Post
authRouter.post('/register',authController.register);
authRouter.post('/login',authController.login);
//#endregion Post

//#region Put
authRouter.put('/update/:id',authController.update);
//#endregion Put

//#region Delete
authRouter.delete('/delete/:id',authController.deleteById);
//#endregion Delete

//#region Get
authRouter.get('/getById/:id',authController.getById);
authRouter.get('/getAll',authController.getAllUsers);
authRouter.get('/register',authController.getRegister);
authRouter.get('/login',authController.getLogin);
authRouter.get('/',authController.getLogin);
//#endregion Get

//#endregion Routes

module.exports = authRouter;