import Component from '@ember/component';

export default Component.extend({
  postExpanded: false,
  commentExpanded: false,
  userInfoShown: false,
  actions: {
    toggleExpandedPost() {
      this.toggleProperty( 'postExpanded' );
    },

    toggleExpandedComment() {
      this.toggleProperty( 'commentExpanded' );
    }
  }
});
