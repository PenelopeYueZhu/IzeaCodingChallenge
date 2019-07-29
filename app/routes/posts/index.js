import Route from '@ember/routing/route';

export default Route.extend({
    //Return all the posts after linking all the users
    //this.store.findAll('post');
    model(){
      return this.store.findAll( 'post' );
    }
});
