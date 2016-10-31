import DS from 'ember-data';

export default DS.Model.extend({
  student: DS.attr(),
  location: DS.attr(),
  issue: DS.attr(),
  solved: DS.attr(),
  opened: DS.attr(),
  closed: DS.attr()
});

// new Date().getTime()
