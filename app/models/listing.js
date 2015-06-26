import DS from 'ember-data';

export default DS.Model.extend({
  ownerName: DS.attr('string'),
  name: DS.attr('string'),
  mapAddress: DS.attr('string'),
  description: DS.attr('string'),
  price: DS.attr('string'),
  guestNumber: DS.attr('string'),
  toilet: DS.attr('string'),
  shower: DS.attr('string'),
  outlet: DS.attr('string'),
  pet: DS.attr('string'),
  image1: DS.attr('string'),
  image2: DS.attr('string'),
  image3: DS.attr('string'),
  image4: DS.attr('string'),
  avgRating: DS.attr('number', {defaultValue: 0}),
  totalStars: DS.attr('number', {defaultValue: 0}),
  reviews: DS.hasMany('review', {async: true})
});
