/**
 * File contains the template for post data
 */

import DS from 'ember-data';
const { Model } = DS;

export default Model.extend({
  userId: DS.attr(),
  //id: DS.attr(),
  title: DS.attr(),
  body: DS.attr()
});
