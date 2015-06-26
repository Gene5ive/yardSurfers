import Ember from 'ember';

export default Ember.Component.extend({
  coordinatesChanged: function() {
    this.insertMap();
  }.observes('mapAddress'),
  insertMap: function() {
    // var address = "1037 SW Broadway Portland, OR 97205";
    var mapAddress = this.get('mapAddress');
    var mapDiv = $('#map-canvas')[0];
     console.log(mapAddress);
     console.log(mapDiv);
    var geocoder = new window.google.maps.Geocoder();
    geocoder.geocode( { 'address': mapAddress}, function(results, status) {

      if (status === google.maps.GeocoderStatus.OK) {
        var options = {
            center: new window.google.maps.LatLng(
                results[0].geometry.location.lat(),
                results[0].geometry.location.lng()
            ),
            zoom: 15
        };
        var map = new window.google.maps.Map(mapDiv, options);

        var marker = new google.maps.Marker({
            map: map,
            position: results[0].geometry.location
        });

      } else {
        console.log("Geocode was not successful for the following reason: " + status);
      }
    });
  }.on('didInsertElement')

});
