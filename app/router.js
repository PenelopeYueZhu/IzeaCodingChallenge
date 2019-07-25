import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('users');
  this.route('photos');
  this.route('posts', function() {
    this.route('detail', { path: '/:id' });
  });
});

export default Router;
