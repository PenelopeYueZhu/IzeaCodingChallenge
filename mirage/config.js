export default function() {

  // only provide data for URL requests that starts with api
  this.namespace = '/api';

  // Data given to requests from /api/posts
  let posts = [{
      type: 'posts',
      id: 1,
      attributes: {
        userId: 1,
        title: "1sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
      }
    }, {
      type: 'posts',
      id: 2,
      attributes: {
        userId: 2,
        title: "2sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
      }
    }, {
      type: 'posts',
      id: 3,
      attributes: {
        userId: 2,
        title: "3sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
      }
    }, {
      type: 'posts',
      id: 4,
      attributes: {
        userId: 2,
        title: "4sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
      }
    }, {
      type: 'posts',
      id: 5,
      attributes: {
        userId: 3,
        title: "5sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
      }
    }]; // end of data[]

  // When getting a GET request from posts, we execute this code
  this.get('/posts', function( db, request ) {
    if( request.queryParams.keyword !== undefined ) {
      // Filter through posts with the keyword provided
      let filteredPosts = posts.filter( function( i ) {
        // Check if the body or title has the keyword
        return (
          // If the title has the keyword
          (i.attributes.title.toLowerCase().indexOf(
            request.queryParams.keyword.toLowerCase()
          ) !== -1)
          ||
          // If the body has the keyword 
          (i.attributes.body.toLowerCase().indexOf(
            request.queryParams.keyword.toLowerCase()
          ) !== -1)
        );

      });
      return  { data: filteredPosts };
    } else {
      return { data: posts };
    }
  });
}
