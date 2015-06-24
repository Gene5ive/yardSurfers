import DS from 'ember-data';

export default DS.Model.extend({
  latitude: DS.attr('string'),
  longitude: DS.attr('string'),
  listing: DS.belongsTo('listing', {async: true})
});
