import Ember from 'ember';

export default Ember.Component.extend({
  addNewTicket: false,
  actions: {
    ticketFormShow() {
      this.set('addNewTicket', true);
    },

    ticketFormHide() {
      this.set('addNewTicket', false);
    },

    saveTicket() {
      var params = {
        student: this.get('student'),
        location: this.get('location'),
        issue: this.get('issue'),
        solved: false,
        opened: new Date().getTime(),
        closed: 'none',
      };
      this.set('addNewTicket', false);
      this.sendAction('saveTicket', params);
      this.set('student', '');
      this.set('location', '');
      this.set('issue', '');
    }

//End
  }
});
