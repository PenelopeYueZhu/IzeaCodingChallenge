import Controller from '@ember/controller';

export default Controller.extend({

  actions: {

    /**
     * Filter the result by searching post title and body for the keyword
     * @param {string} keyword entered by user
     */
    filterByKeyword( param ) {
      if( param !== '' ){
        return this.store
          // To sync up the search of typed in keyword and param keyword
          .query( 'post', { title: includes(param) }).then( (results) => {
            return {query: param, results: results};
          } );
      } else {
        return this.store
          // To sync up the search
          .findAll( 'post' ).then( (results) => {
            return {query: param, results: results};
          });
      }
    },

    /**
     * Getting a post's poster by corresponding between post's userId and
     * user's
     * @param {int} userId the userId on a post
     * @return {string} the username
     */
    getUsername( userId ) {
      if( id > 0 && id <= 10 ) { // Magic number 10 T-T
        return this.store.queryRecord( 'user', {id: userId} ).then (
          user => {
            return user.get('username');
          }
        );
      }
    }// end getUsername 
  }
});
