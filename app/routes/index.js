import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('ticket');
  },

  actions: {
    saveTicket(params) {
      var newTicket = this.store.createRecord('ticket', params);
      console.log("index.js: "+newTicket);
      newTicket.save();
      this.transitionTo('index');
    }

//End
  }
});
