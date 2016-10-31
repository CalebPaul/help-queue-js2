import Ember from 'ember';

export function hideSolved(params) {
  var hiddenTickets  = params[0].get('solved');

  if (!hiddenTickets) {
    console.log('in the helper!');
    //THIS HELPER DOES NOTHING!
  }
}

export default Ember.Helper.helper(hideSolved);
