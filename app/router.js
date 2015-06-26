import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('home', { path: '/' });
<<<<<<< HEAD
  this.route('signin');
=======
>>>>>>> 1c31762612d9dfc226f1a9a7b62e6c245729258f
  this.resource('listings', function(){
    this.resource('new-listing');
  });
  this.resource('listing', { path: 'listings/:id' });
});

export default Router;
