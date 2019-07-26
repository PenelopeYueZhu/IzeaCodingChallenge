import Route from '@ember/routing/route';
import {inject as service } from '@ember/service';
import RSVP from 'rsvp';

export default Route.extend({
  ajax: service(),

  model(){

    var store = this.store;
    return RSVP.hash({
      // Getting all the posts
      post: this.get('ajax').request('/posts').then(
              responsePost => {
                store.pushPayload( 'post', responsePost );
            }),

      // Getting all the users
      user: this.get('ajax').request('/users').then(
              responseUser => {
                store.pushPayload( 'user', responseUser );
            }),

      // Getting all the comments
      comments: this.get('ajax').request('/comments').then(
                  responseComment => {
                    store.pushPayload( 'comment', responseComment );
                })

    });
  }
});
