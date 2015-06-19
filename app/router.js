import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  // .route renders a single template
  this.route("about");
  // Whereas .resource renders a group of related templates
  this.resource("posts", {path: '/'}, function() {
    this.route("new-post");
  });
  this.resource("post", {path: ':post_id'}, function() {
    this.route("response");
  });
});

export default Router;
