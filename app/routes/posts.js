import Ember from 'ember';

// The posts route tells ember to allow access to the post model
// in the posts template
export default Ember.Route.extend({
  // here is a model 'hook' that tells ember which model to make
  // accessible in the template. (What is a hook? I believe it gets
  // called sometime before or after something else, in this case
  // before the template is fully loaded?)
  model: function() {
    return this.store.find('post');
  }

});
