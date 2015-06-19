import Ember from 'ember';

export default Ember.ObjectController.extend({
  needs: ['question'],
  actions: {
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
