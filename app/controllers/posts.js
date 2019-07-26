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
          .query( 'post', { title: param }).then( (results) => {
            return {query: param, results: results};
          } );
      } else {
        return this.store
          // To sync up the search
          .findAll( 'post' ).then( (results) => {
            return {query: param, results: results};
          });
      }
    }

  }
});
