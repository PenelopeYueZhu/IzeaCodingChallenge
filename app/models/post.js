/**
 * File contains the template for post data
 */

import DS from 'ember-data';
const { Model } = DS;

export default Model.extend({
  user: DS.belongsTo('user', {inverse: 'posts'} ),
  comments: DS.hasMany( 'comment', {inverse: 'post'} ),
  
  userId: DS.attr(),
  title: DS.attr(),
  body: DS.attr()
});
