import Route from '@ember/routing/route';

export default Route.extend({

  // Redirect index page to posts page
  redirect() {
    this.transitionTo('posts');
  }
});
