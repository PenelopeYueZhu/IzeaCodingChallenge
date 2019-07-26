/**
 * File contains the template for user data
 */

import DS from 'ember-data';
const { Model } = DS;

export default Model.extend({
  posts: DS.hasMany('post', {inverse: 'user'}),
  name: DS.attr(),
  username: DS.attr(),
  email: DS.attr(),
  address: DS.attr(),
  phone: DS.attr(),
  website: DS.attr(),
  company: DS.attr()
});
