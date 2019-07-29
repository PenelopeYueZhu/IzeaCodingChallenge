import { Factory } from 'ember-cli-mirage';
import faker from 'faker';

export default Factory.extend({
  name() {
    return faker.name.lastName();
  },

  username() {
    return faker.name.firstName();
  },

  website() {
    return faker.internet.url();
  },

  email: 'eh@eh.com',
  phone: '0000000000',
  company: 'uh',
  address: "92998-3874",

  afterCreate( user, server ){
    server.createList( 'post', 3, {user});
  }

});
