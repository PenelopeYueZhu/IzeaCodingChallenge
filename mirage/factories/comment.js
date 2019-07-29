import { Factory } from 'ember-cli-mirage';
import faker from 'faker';

export default Factory.extend({

  postId() {
    return faker.random.number( {min: 1, max: 3});
  },

  name() {
    return faker.name.firstName();
  },

  email() {
    return faker.internet.email();
  },

  body() {
    return faker.lorem.sentence();
  }

});
