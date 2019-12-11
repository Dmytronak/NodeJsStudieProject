const authService = require('../services/auth.service')

//#region Get

exports.getRegister = function (request,response) {
    response.send('Register');
};

exports.getLogin = function (request,response) {
    response.send('Login');
};

exports.getAllUsers = function (request,response, next) {
    authService
        .getAll()
        .then(users => {
            response.json(users); 
        })
        .catch(error => next(error));
};

exports.getById = function (request, response, next) {
    authService
        .getById(request.params.id)
        .then(user => {
            response.json(user); 
        })
        .catch(error => next(error));
};

exports.getCurrent = function (request, response, next) {
    authService
        .getById(request.user.sub)
        .then(user => user ? response.json(user) : response.sendStatus(404))
        .catch(error => next(error));
}

//#endregion Get

//#region Post

exports.update = function (request, response, next){
    authService
        .update(req.params.id, req.body)
        .then(() => response.json({}))
        .catch(error => next(error));
}

exports.deleteById = function (request, response, next) {
    authService
        .deleteById(request.params.id)
        .then(() => response.json({}))
        .catch(error => next(error));
}

exports.login = function (request, response, next) {
    authService
        .login(request.body)
        .then(user => user ? response.json(user) : response.status(400).json({ message: 'Username or password is incorrect' }))
        .catch(error => next(error));
}

exports.register = function (request, response, next) {
    authService
        .register(request.body)
        .then(()=>response.json({}))
        .catch(error=>next(error));
};
//#endregion Post