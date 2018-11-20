import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  // Main Route 
  this.route('dashboard', {path: '/'});

  // Life And Ministry
  this.route('life', {
    path: 'life/:type/:id'
  });

  this.route('login');
});

export default Router;
