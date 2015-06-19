import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    addPost: function() {
      // We reference Ember.Controller for the new-post with 'this'
      var newPost = this.store.createRecord('post', {
        title: this.get('title'),
        author: this.get('author'),
        body: this.get('body')
      });
      // After making the new record we have to save it to the (Firebase)DB
      newPost.save();
      // Reset the form:
      this.setProperties({
        title: '',
        author: '',
        body: ''
      });
    }
  }
});
