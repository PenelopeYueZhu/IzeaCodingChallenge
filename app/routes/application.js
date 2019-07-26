import Route from '@ember/routing/route';
import {inject as service } from '@ember/service';

export default Route.extend({
  ajax: service(),

  beforeModel( transition ){
    var store = this.store;
    return this.get('ajax').request('/posts', {dataType: 'json'}).then(
              response => {
                response.forEach( function( item, index ) {
                  store.push( store.normalize('post', item));
                });
              } );
  },

  model(){
    return this.store.peekAll('post');


        /*this.get('store').push({
          data: [{
              type: 'post',
              id: 1,
              attributes: {
                userId: 1,
                title: "1sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
                body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
              }
            }, {
              type: 'post',
              id: 2,
              attributes: {
                userId: 2,
                title: "dd2sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
                body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
              }
            }

          ]
        });*/
  }
});
