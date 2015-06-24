import Ember from "ember";

var GoogleMapComponent = {
        insertMap: function(){
        $(".image").hide();
        var lat = this.get('lat');
        var long = this.get('long');

        var mapProp = {
          center:new google.maps.LatLng(lat, long),
          zoom:10,
          mapTypeId:google.maps.MapTypeId.ROADMAP
        };
        var map=new google.maps.Map(document.getElementById("googleMap"),mapProp);
        var marker=new google.maps.Marker({
        position:new google.maps.LatLng(lat, long),
        animation: google.maps.Animation.DROP
        });

        marker.setMap(map);

    }.on("didInsertElement")
};

export default Ember.Component.extend(GoogleMapComponent);
