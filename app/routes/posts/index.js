import Route from '@ember/routing/route';

export default Route.extend({
  // Returning an array containing test objects
  model() {

    //Return all the posts after linking all the users
    return this.store.findAll('post');
  }
});
