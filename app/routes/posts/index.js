import Route from '@ember/routing/route';
import { typeOf } from '@ember/utils';
import RSVP from 'rsvp';

export default Route.extend({
  // Returning an array containing test objects
  model() {
    // Get all the records of posts
    this.store.findAll('user');
    this.store.findAll('post').then( posts => {
      posts.forEach( post => {
        var userId = post.get('userId');
        //console.log( userId );
        let user = this.store.peekRecord( 'user', userId );
        post.set('user', user);
      })
      posts.save();
    });

    //Return all the posts after linking all the users
    return RSVP.hash( {
      post: this.store.findAll('post'),
      user: this.store.findAll('user')
    });
  }
});
