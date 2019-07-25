export default function() {

  // only provide data for URL requests that starts with api
  this.namespace = '/api';

  // Data given to requests from /api/posts
  this.get( 'posts', function(){
    return {
      data:[{
        type: 'posts',
        id: 1,
        attributes: {
          title: "1sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
          body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
        }
      }, {
        type: 'posts',
        id: 2,
        attributes: {
          title: "2sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
          body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
        }
      }, {
        type: 'posts',
        id: 3,
        attributes: {
          title: "3sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
          body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
        }
      }, {
        type: 'posts',
        id: 4,
        attributes: {
          title: "4sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
          body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
        }
      }, {
        type: 'posts',
        id: 5,
        attributes: {
          title: "5sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
          body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
        }
      }] // end of data[]
    }; // end of return {}
  } ); // end of this.get
}
