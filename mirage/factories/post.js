import { Factory } from 'ember-cli-mirage';
import faker from 'faker';

export default Factory.extend({
  userId() {
    return Math.floor(Math.random() * 3) + 1;
  },

  title() {
    return faker.lorem.sentence() + "title";
  },

  body() {
    return faker.lorem.paragraph();
  },

  afterCreate( post, server ){
    server.createList('comment', 5, {post} );
  }
});
