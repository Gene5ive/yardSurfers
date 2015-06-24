import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('home', { path: '/' });
  this.resource('listings', function(){
    this.resource('new-listing');
  });
  this.resource('listing', { path: 'listings/:id' });
});

export default Router;
