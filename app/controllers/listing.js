import Ember from 'ember';

export default Ember.Controller.extend({
  toilets: ['yes', 'no'],
  showers: ['yes', 'no'],
  outlets: ['yes', 'no'],
  pets: ['yes', 'no'],
  avgRating: [0], // remove this later
  isEditing: false,
  needs: ['map', 'listing'],
  actions: {
    edit: function() {
      this.set('isEditing', true);
    },
    save: function() {
      var listing = this.get('model');
      listing.set('name', this.get('model.name'));
      listing.set('ownerName', this.get('model.ownerName'));
      listing.set('mapAddress', this.get('model.mapAddress'));
      listing.set('description', this.get('model.description'));
      listing.set('price', this.get('model.price'));
      listing.set('toilet', this.get('model.toilet'));
      listing.set('shower', this.get('model.shower'));
      listing.set('outlet', this.get('model.outlet'));
      listing.set('pet', this.get('model.pet'));
      listing.set('image1', this.get('model.image1'));
      listing.set('image2', this.get('model.image2'));
      listing.set('image3', this.get('model.image3'));
      listing.set('image4', this.get('model.image4'));
      listing.save();
      this.set('isEditing', false);
      this.transitionToRoute('listings');
    },
    delete: function() {
      var listing = this.get('model');
      var maps = listing.get('maps');
      listing.destroyRecord();
      this.transitionToRoute('listings');
    },
    reviewing: false,
    addReview: function() {
      var review = this.store.createRecord('review', {
        author: this.get('author'),
        body: this.get('body'),
        stars: this.get('stars')
      });
      var listing = this.get('controllers.listing.model');
      var stars = parseInt(this.get('stars'));
      var avgRating = parseInt(this.get('avgRating'));
      var totalReviews = this.store.all('review').get('length');
      review.save().then(function() {
        listing.get('reviews').pushObject(review);
        var newAvgRating = Math.floor((avgRating + stars) / totalReviews);
        listing.set('avgRating', newAvgRating);
        listing.save();
        return newAvgRating;
      });

      $("#one").hide();
      $("#two").hide();
      $("#three").hide();
      $("#four").hide();
      $("#five").hide();

      if(newAvgRating === 1){
        $("#one").fadeIn();
      }else if(newAvgRating === 2){
        $("#two").fadeIn();
      }else if(newAvgRating === 3){
        $("#three").fadeIn();
      }else if(newAvgRating === 4){
        $("#four").fadeIn();
      }else if(newAvgRating === 5){
        $("#five").fadeIn();
      }

      this.set('reviewing', false);
      this.setProperties({
        author: '',
        body: '',
      });
    },
    showReview: function() {
      this.set('reviewing', true);
    }


  }
});
