import Ember from 'ember';

export default Ember.Controller.extend({
  toilets: ['yes', 'no'],
  showers: ['yes', 'no'],
  outlets: ['yes', 'no'],
  pets: ['yes', 'no'],
  isEditing: false,
  needs: ['map'],
  actions: {
    edit: function() {
      this.set('isEditing', true);
    },
    save: function() {
      var listing = this.get('model');
      listing.set('name', this.get('model.name'));
      listing.set('ownerName', this.get('model.ownerName'));
      listing.set('addNum', this.get('model.addNum'));
      listing.set('addStreet', this.get('model.addStreet'));
      listing.set('addCity', this.get('model.addCity'));
      listing.set('addState', this.get('model.addState'));
      listing.set('addZip', this.get('model.addZip'));
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
      this.transitionToRoute('listings')
    },
    delete: function() {
      var listing = this.get('model');
      var maps = listing.get('maps');

      // var ids = [];
      // maps.forEach(function(map){
      //   ids.push(map.get('id'));
      // });

      // var allMaps = this.store.find('map').then(function(allMapsCallback) {
      //   ids.forEach(function(id){
      //     allMapsCallback.forEach(function(aMap){
      //       if(id === aMap.get('id')) {
      //         aMap.destroyRecord();
      //       }
      //     });
      //   });
      listing.destroyRecord();
      // });

      this.transitionToRoute('listings');
    }
  }
});
