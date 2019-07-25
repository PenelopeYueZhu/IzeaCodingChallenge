import Component from '@ember/component';

export default Component.extend({
  isExpanded: false,
  actions: {
    toggleExpandedPost() {
      this.toggleProperty( 'isExpanded' );
    }
  }
});
