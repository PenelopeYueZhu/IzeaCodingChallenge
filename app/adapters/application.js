// app/adapters/application.js
import DS from 'ember-data';
import AjaxServiceSupport from 'ember-ajax/mixins/ajax-support';

export default DS.RESTAdapter.extend(AjaxServiceSupport);
// For testing with mirage
//export default DS.RESTAdapter.extend({
//  namespace: 'api'
//});
