import DS from 'ember-data';

export default DS.Model.extend({
  author: DS.attr('string'),
  body: DS.attr('string'),
  stars: DS.attr('number'),
  listing: DS.belongsTo('listing', {async: true})
});
