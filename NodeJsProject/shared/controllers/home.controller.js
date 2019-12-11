exports.index = function (request, response) {
    response.sendFile(`${process.env.FULL_PATH_TO_PROJECT}/shared/views/home/index.html`);
};
exports.about = function (request, response) {
    response.sendFile(`${process.env.FULL_PATH_TO_PROJECT}/shared/views/home/about.html`);
};

exports.contacts = function (request,response) {
    response.sendFile(`${process.env.FULL_PATH_TO_PROJECT}/shared/views/home/contacts.html`);
}