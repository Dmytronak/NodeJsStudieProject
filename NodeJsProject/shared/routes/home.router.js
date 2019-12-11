//#region Properties
const express = require('express');
const homeRouter = express.Router();
//#endregion Properties

//#region Controllers
const homeController = require('../controllers/home.controller')
//#endregion Controllers

homeRouter.get('/contacts',homeController.contacts);
homeRouter.get('/about',homeController.about);
homeRouter.get('/',homeController.index);

module.exports = homeRouter;