//#region Config
require('dotenv').config();
const port = process.env.PORT || 3000;
const express = require('express');
const jsonParser = express.json();
const app = express();
const jwt = require('./shared/guards/jwt.guard')
const logerHelper = require('./shared/helpers/loger.helper');
const errorInterceptor = require('./shared/interceptors/error.interceptor');

//#endregion Config

//#region Routers
const authRouter = require('./shared/routes/auth.router');
const homeRouter = require('./shared/routes/home.router');
//#endregion Routers


//#region Using
// use JWT auth to secure the api
app.use(jsonParser); // on top of routing
app.use(jwt());

app.use('/auth', authRouter);
app.use('/', homeRouter);
app.use(logerHelper);
app.use(errorInterceptor);
//#endregion Using


app.listen(port, () => {
    console.log(`Server restart, listening port - ${port}`);
});

// mongoose.connect(process.env.DB_CONNECTION_STRING,  { useUnifiedTopology: true, useNewUrlParser: true }, function(err){
//     if(err) return console.log(err);
   
// });
