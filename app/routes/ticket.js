import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('ticket', params.ticket_id);
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
