import Component from '@ember/component';

export default Component.extend({
  classNames: ['posts-filter'],
  value: '',

  init() {
    this._super(...arguments);
    this.filter('').then( (allResults) => {
      this.set('results', allResults.results  );
    });
  },

  actions: {
    handleFilterEntry() {
      let filterInputValue = this.value;
      let filterAction = this.filter;
      filterAction( filterInputValue ).then( (filteredResults) => {
        // value == user input, query == keyword we used to search
        // chekcing if the result matches the input field
        if( filteredResults.query === this.value) {
          this.set( 'results', filteredResults.results );
        }
      });
    }
  }
});
