/**
 * File contains the template for comments data
 */

import DS from 'ember-data';
const { Model } = DS;

export default Model.extend({
  post: DS.belongsTo( 'post', {inverse: 'comments'} ),

  postId: DS.attr(),
  name: DS.attr(),
  email: DS.attr(),
  body: DS.attr()
});
