/**
 * app/routes/application.js
 */

import Route from '@ember/routing/route';
//import {inject as service } from '@ember/service';

export default Route.extend({
//  ajax: service(), // Use ajax to connect to server

  /* loaded when the app just starts up */
  model(){

    var store = this.store;

    // Get all the user just to populate store
    store.findAll( 'user' ).then( function() {

      store.findAll('post').then( posts => {
        // Setting the relationship between post and user
        posts.forEach( post => {
          var userId = post.get('userId');
          let user = store.peekRecord( 'user', userId );
          post.set('user', user);
        });
        //posts.save();
      });

      // Getting all the records of comments
      store.findAll('comment').then( comments => {
        console.log( comments )
        // Setting the relationship between comment and post
        comments.forEach( comment => {
          var postId = comment.get( 'postId' );
          let post = store.peekRecord( 'post', postId );
          comment.set( 'post', post );
        });
        //comments.save();
      }); // end of find all commet
    });

  }
});
