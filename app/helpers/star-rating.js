import Ember from 'ember';

export default Ember.HTMLBars.makeBoundHelper(function(params) {
  var upTo = parseInt(params[0]);
  // debugger;
  var html = ""
  for (var i = 0; i < upTo; i++) {
    html += params[1];
  }
  var safeString = new Ember.Handlebars.SafeString(html);
  return safeString;
});
