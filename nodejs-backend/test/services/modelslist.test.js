const assert = require('assert');
const app = require('../../src/app');

describe('\'modelslist\' service', () => {
  it('registered the service', () => {
    const service = app.service('modelslist');

    assert.ok(service, 'Registered the service (modelslist)');
  });
});
