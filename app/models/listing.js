import DS from 'ember-data';

export default DS.Model.extend({
  ownerName: DS.attr('string'),
  name: DS.attr('string'),
  addNum: DS.attr('string'),
  addStreet: DS.attr('string'),
  addCity: DS.attr('string'),
  addState: DS.attr('string'),
  addZip: DS.attr('string'),
  description: DS.attr('string'),
  price: DS.attr('string'),
  toilet: DS.attr('string'),
  shower: DS.attr('string'),
  outlet: DS.attr('string'),
  pet: DS.attr('string'),
  image1: DS.attr('string'),
  image2: DS.attr('string'),
  image3: DS.attr('string'),
  image4: DS.attr('string'),
  maps: DS.hasMany('map', {async: true})
});
