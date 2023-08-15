const { Modelslist } = require('./modelslist.class');
const createModel = require('../../models/modelslist.model');
const hooks = require('./modelslist.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/modelslist', new Modelslist(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('modelslist');

  service.hooks(hooks);
};