export default function() {

  // only provide data for URL requests that starts with api
  this.namespace = 'api';

  // Routing all the links to here in testing
  this.get( '/posts');

  this.get( '/users');

  this.get( '/comments');


  // Find and return the provided post from the list above
//  this.get('/posts/:id', function( db, request ){
//    return { data: posts.find( (post) => request.params.id == post.id )}
//  });
}
