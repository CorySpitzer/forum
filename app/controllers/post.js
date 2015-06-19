import Ember from 'ember';

// We need an ObjectController,
// as opposed to just a Controller, so that we can display
// a question's properties on its handlebars page because
// ObjectControllers give their hbs files access to properties
// and Controllers don't:
export default Ember.ObjectController.extend({
  needs: ['response'],
  isEditing: false,
  isResponding: false,
  actions: {
    edit: function() {
      this.set('isEditing', true);
    },
    save: function() {
      this.set('isEditing', false);
    },
    delete: function() {
      if (confirm('Really?')) {
        this.get('model').destroyRecord();
        this.transitionToRoute('/', {async: true});
      }
    },
    respond: function() {
      this.set('isResponding', true);
    },
    submitResponse: function() {
      var newResponse = this.store.createRecord('response', {
        body: this.get('body'),
        date: this.get('date')
      });
      // Reset the form:
      newResponse.save();
      this.setProperties({
        body: '',
        date: ''
      });
    }
  }
});
