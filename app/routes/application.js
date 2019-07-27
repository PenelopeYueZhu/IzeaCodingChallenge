import Route from '@ember/routing/route';
import {inject as service } from '@ember/service';
import { hash } from 'rsvp';

export default Route.extend({
  ajax: service(),

  model(){

    var store = this.store;
    return hash({
      // Getting all the posts
      post: this.get('ajax').request('/posts' ).catch( error => {
              if( isAjaxError( error ) ) {
                //handle ajax error here
                return;
              }
            })
            .then(
              responsePost => {
                store.pushPayload( 'post', responsePost );
                store.findAll( 'post');
            }),

      // Getting all the users
      user: this.get('ajax').request('/users' ).catch( error => {
              if( isAjaxError( error ) ) {
                //handle ajax error here
                return;
              }
            })
            .then(
              responseUser => {
                store.pushPayload( 'user', responseUser );
                store.findAll( 'user');
            }),

      // Getting all the comments
      comment: this.get('ajax').request('/comments' ).catch( error => {
                if( isAjaxError( error ) ) {
                  //handle ajax error here
                  return;
                }
              })
              .then(
                responseComment => {
                  store.pushPayload( 'comment', responseComment );
                  store.findAll( 'comment');
              })
    })
    .then ( function( ) {
      store.findAll('post').then( posts => {
        // Setting the relationship between post and user
        posts.forEach( post => {
          var userId = post.get('userId');
          let user = store.peekRecord( 'user', userId );
          post.set('user', user);
        });
        posts.save();
      });

      //this.store.findAll('post');
      // Getting all the records of comments
      store.findAll('comment').then( comments => {
        // Setting the relationship between comment and post
        comments.forEach( comment => {
          var postId = comment.get( 'postId' );
          let post = store.peekRecord( 'post', postId );
          comment.set( 'post', post );
        });
        comments.save();
      }); // end of find all commet
    }); // end of then
  }
});
