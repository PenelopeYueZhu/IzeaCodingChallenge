import Route from '@ember/routing/route';

export default Route.extend({
  // Returning an array containing test objects
  model() {
    // Get all the records of postsand users
    this.store.findAll('user');
    this.store.findAll('post').then( posts => {
      posts.forEach( post => { // Setting the relationship between post and user
        var userId = post.get('userId');
        let user = this.store.peekRecord( 'user', userId );
        post.set('user', user);
      });
      posts.save();
    });

    // Getting all the records of comments
    this.store.findAll('comment').then( comments => {
      // Setting the relationship between comment and post
      comments.forEach( comment => {
        var postId = comment.get( 'postId' );
        let post = this.store.peekRecord( 'post', postId );
        comment.set( 'post', post );
        console.log( post );
      });
      comments.save();
    });

    //Return all the posts after linking all the users
    return this.store.findAll('post');
  }
});
