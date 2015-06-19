import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  // .route renders a single template
  this.route("about");
  // Whereas .resource renders a group of related templates
  this.resource("posts");
});

export default Router;
