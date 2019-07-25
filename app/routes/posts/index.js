import Route from '@ember/routing/route';

export default Route.extend({
  // Returning an array containing test objects
  model() {
    return this.store.findAll('post');
  }
});
