const expressJwt = require('express-jwt');
const authService = require('../services/auth.service');

module.exports = jwt;

function jwt() {
    const secret = process.env.JWT_KEY;
    return expressJwt({ secret : secret, isRevoked }).unless({
        path: [
            '/auth/',
            '/auth/getAll',
            '/auth/login',
            '/auth/register'
        ],
    });
}

async function isRevoked(request, payload, done) {
    const user = await authService.getById(payload.sub);
    // revoke token if user no longer exists
    if (!user) {
        return done(null, true);
    }

    done();
};