const users = require("./users/users.service.js");
const modelslist = require("./modelslist/modelslist.service.js");
// ~cb-add-require-service-name~

// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(users);
  app.configure(modelslist);
  // ~cb-add-configure-service-name~
};
